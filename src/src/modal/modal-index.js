
export class RequestIndex{
  configureRouter(config, router) {
    config.map([{
      route: '',
      moduleId: './simple-dialogs/simple-dialogs',
      title: 'Simple Dialog',
      nav: true
    }, {
      route: 'confirm-repeat',
      moduleId: './confirm-repeat/roles',
      title: 'Confirm repeat',
      nav: true
    }]);

    config.mapUnknownRoutes('../not-found', 'not-found');

    this.router = router;
  }
}
