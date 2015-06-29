/**
 * Created by moshensky on 6/29/15.
 */
export class ModalDialog {
  constructor() {
    console.warn('modal constructor');
    this.showing = true;
  }

  closeEventGoesHere(){
    this.showing = false;
  }

  someFunctionGoesHere(){
    console.log('do stuff');
    this.showing = false;
  }

  showMessage() {
    console.warn('modal showMessage()');
    this.showing = true;
  }
}
