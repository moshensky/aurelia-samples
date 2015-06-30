import {inject} from 'aurelia-framework';
import {Http} from 'service';
import {Logger} from 'service';
import {Session} from 'service';
import {Router} from 'aurelia-router';
import {Validation, ensure} from 'aurelia-validation';
import {I18N} from 'aurelia-i18next';

const routes = {
  request: 'request'
};

@inject(Validation, Logger, Session, Router, Http, I18N)
export class Login{
  @ensure((it) => { it.isNotEmpty().hasLengthBetween(3,10) })
  email = '';
  @ensure((it) => { it.isNotEmpty().hasLengthBetween(3,10) })
  password = '';

  constructor(validation, logger, session, router, http, i18n) {
    this.validation = validation.on(this);
    this.logger = logger;
    this.session = session;
    this.router = router;
    this.http = http;
    this.i18n = i18n;
  }

  login() {
    var self = this;

    this.validation.validate().then(() => {
      this.http.loginResourceOwner(this.email, this.password)
        .then(_ => {
          self.logger.success({
            message: self.i18n.tr('app:login.loggedInSuccessful')
          });
          this.router.navigate(routes.request);
        })
        .catch(_ => {
          self.logger.error({
            message: self.i18n.tr('app:login.loggedInUnsuccessful')
          });
        });
    });
  }

  canActivate(params, routeConfig, navigationInstruction) {
    const isLoggedIn = this.session.isLoggedIn;
    const hasPrevInstruction = !!navigationInstruction.navigationContext.prevInstruction;

    if (isLoggedIn) {
      if (hasPrevInstruction) {
        this.logger.error('Already logged in!');
        this.router.navigate(navigationInstruction.navigationContext.prevInstruction.fragment);
      } else {
        this.router.navigate(routes.request);
      }
    }

    return !isLoggedIn;
  }
}
