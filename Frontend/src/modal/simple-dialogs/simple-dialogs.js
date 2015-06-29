import {Http} from 'service/http';
import {Logger} from 'service/logger';
import {I18N} from 'aurelia-i18next';
import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
import {ModalDialog} from '../../modal-dialog/modal-dialog'

@inject(Http, Logger, I18N, Validation, ModalDialog)
export class SimpleDialogs {
  constructor(http, logger, i18n, validation, dialog) {
    this.http = http;
    this.logger = logger;
    this.i18n = i18n;
    this.validation = validation;
    this.dialog = dialog;
  }

  showMessage() {
    console.log('showing...message')
    this.dialog.showMessage();
  }
}
