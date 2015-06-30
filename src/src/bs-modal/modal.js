import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';

@customElement('modal')
@inject(Element)
export class Modal {
  @bindable showing = false;
  @bindable options = {};

  constructor(element) {
    this.element = element;
  }
  attached(){
    let options = Object.assign({ show: false }, this.options);
    $(this.modal).modal(options);
  }
  showingChanged(newValue){
    if (newValue) {
      $(this.modal).modal('show')
    } else {
      $(this.modal).modal('hide')
    }
  }
}
