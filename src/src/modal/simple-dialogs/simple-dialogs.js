import {Http} from 'service/http';
import {Logger} from 'service/logger';
import {I18N} from 'aurelia-i18next';
import {inject} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';
//import {ModalDialog} from '../../modal-dialog/modal-dialog'

@inject(Http, Logger, I18N, Validation)
export class SimpleDialogs {
  constructor(http, logger, i18n, validation) {
    this.http = http;
    this.logger = logger;
    this.i18n = i18n;
    this.validation = validation;
  //  this.dialog = dialog;
  }

  showConfirm() {
    this.confirmShowing = true;
    console.log('show confirm');
  }

  onConfirmOkClick() {
    console.log('on confirm "ok" click')
    this.confirmShowing = false;
  }

  onConfirmCancelClick() {
    this.confirmShowing = false;
    console.log('on confirm "cancel" click')
  }

  showMessage() {
    console.log('showing...message')
    this.showing = true;
  }

  closeEventGoesHere(){
    this.showing = false;
  }

  someFunctionGoesHere(){
    console.log('do stuff');
    this.showing = false;
  }
}
