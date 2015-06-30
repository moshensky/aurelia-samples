export class SimpleDialogs {
  constructor() {
    this.confirmDialogShowing = false;
  }

  showConfirmDialog() {
    this.confirmDialogShowing = true;
    console.log('show confirm');
  }

  onConfirmDialogOkClick() {
    console.log('on confirm "ok" click')
    this.confirmDialogShowing = false;
  }

  onConfirmDialogCancelClick() {
    this.confirmDialogShowing = false;
    console.log('on confirm "cancel" click')
  }
}
