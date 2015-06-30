import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';
import {I18N} from 'aurelia-i18next';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    //.plugin('aurelia-bs-modal')
    .plugin('aurelia-validation', (config) => {
      config.useLocale('bg-BG');
    })
    .plugin('aurelia-custom-common-files', (config) => {
      config.useLocale('bg-BG');
    })
    .plugin('service', (config) => {
      config.useLocale('bg-BG');
      config.setHttpService({
        authHost: 'http://muvarna-dev-tokenendpoint.amvr-ci.int',
        serviceHost: 'http://localhost:50058',
        serviceApiPrefix: '/api/',
        requestTimeout: 30000 // milliseconds
      });
      config.routerAuthStep({
        loginRoute: 'login'
      });
    })
    .plugin('aurelia-i18next', (instance) => {
      //http://i18next.com/pages/doc_init.html
      instance.setup({
        detectFromHeaders: false,
        lng: 'bg',
        fallbackLng: 'bg',
        ns: 'app',
        resGetPath: 'assets/locales/__lng__/__ns__.json',
        useCookie: false
      });
    });

  aurelia.globalizeResources('./bs-modal/modal');
  aurelia.globalizeResources('./bs-modal/modal-header');
  aurelia.globalizeResources('./bs-modal/modal-body');
  aurelia.globalizeResources('./bs-modal/modal-footer');
  aurelia.globalizeResources('./bs-modal/au-button');

  aurelia.start().then(a => a.setRoot());
}
