import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Session} from 'service/session';
import {Router} from 'aurelia-router';

const routes = {
  login: 'login'
};

@inject(Session, Router)
export class NavBar {
  @bindable router = null;

  constructor(session, router) {
    this.session = session;
    this.router = router;
  }

  get isUserLoggedIn() {
    //return this.session.isLoggedIn === true;
    return true;
  }

  get userName() {
    //return this.session.userName;
    return 'Kosta';
  }

  logout() {
    this.session.clearUser();
    this.router.navigate(routes.login);
  }
}
