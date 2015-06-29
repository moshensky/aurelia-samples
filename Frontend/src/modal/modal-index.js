
export class RequestIndex{
  configureRouter(config, router) {
    config.map([{
      route: '',
      moduleId: './simple-dialogs/simple-dialogs',
      title: 'Simple Dialog',
      nav: true
    }]);

    config.mapUnknownRoutes('../not-found', 'not-found');

    this.router = router;
  }
}
