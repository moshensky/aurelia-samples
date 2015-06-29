/**
 * Created by moshensky on 6/29/15.
 */
import {inject} from 'aurelia-framework';
import {ModalDialog} from '../../modal-dialog/modal-dialog'

@inject(ModalDialog)
export class Dates {
  constructor(dialog) {
    this.dialog = dialog;
  }
}
