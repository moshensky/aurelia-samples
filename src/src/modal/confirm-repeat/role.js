/**
 * Created by moshensky on 5/24/15.
 */
import {ensure} from 'aurelia-validation';
import {TableValidationViewStrategy} from 'aurelia-custom-common-files';
import {BaseModel} from 'aurelia-custom-common-files';

export class Role extends BaseModel {

  @ensure(it => it.isNotEmpty().hasLengthBetween(3,30))
  name = undefined;

  constructor(data, validation) {
    super();

    this.id = data.id;
    this.name = data.name;

    this.setEditMode(data.id === undefined);
    this.validation = validation.on(this, (config) => {
      config.useDebounceTimeout(150);
      config.useViewStrategy(new TableValidationViewStrategy());
    });
  }
}
