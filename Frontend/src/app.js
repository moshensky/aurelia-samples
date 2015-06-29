import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import 'font-awesome/css/font-awesome.css!';

import moment from 'moment';
import 'moment/locale/bg';
import {I18N} from 'aurelia-i18next';
import {RolesAuthorizeStep} from 'service';

import {inject} from 'aurelia-framework';

const routes = {
  login: 'login'
};

@inject(I18N)
export class App {
  constructor(i18n) {
    this.i18n = i18n;
    moment.locale('bg');
  }

  configureRouter(config, router) {
    // todo: translate
    config.title = 'Dorms!';
    config.addPipelineStep('authorize', RolesAuthorizeStep);
    //config.options.pushState = true;
    config.map([{
      route: ['', routes.login],
      moduleId: './login/login',
      nav: false
    }, {
      route: 'dates',
      moduleId: './dates/dates',
      nav: true,
      title: 'Dates'
    }, {
      route: 'modal-dialog',
      moduleId: './modal/modal-index',
      nav: true,
      title: 'Modal Dialog'
    }]);

    config.mapUnknownRoutes('./not-found', 'not-found');

    this.router = router;
  }
}
