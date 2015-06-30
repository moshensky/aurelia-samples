import {inject} from 'aurelia-framework';
import {Http} from 'service';
import {Logger} from 'service';
import {Validation} from 'aurelia-validation';
import {Role} from './role'

@inject(Http, Logger, Validation)
export class Roles {
  constructor(http, log, validation) {
    this.heading = 'Departments';
    this.roles = [];
    this.log = log;
    this.http = http;
    this.validation = validation;
  }

  add() {
    let role = new Role ({}, this.validation);
    this.roles.push(role);
  }

  save(role) {
    role.validation.validate().then(() => {
      var data = role.getOwnProperties();

      var promise;
      if (role.id !== undefined) {
        promise = this.http.put('administration/role/' + role.id, data).then(_ => {
          role.setEditMode(false);
          this.log.success('changes saved!')
        });
      } else {
        promise = this.http.post('administration/role', data).then(id => {
          role.id = id;
          role.setEditMode(false);
          this.log.success('changes saved!')
        });;
      }
    }).catch(errors => {
      this.log.warn('form is not valid')
    });
  }

  cancel(role) {
    if (role.id === undefined) {
      this.remove(role);
    } else {
      role.revertChanges();
    }
  }

  remove(role) {
    // TODO: add confirm dialog!
    if (role.id !== undefined) {
      this.http.delete('administration/role/' + role.id).then(_ => {
        var index = this.roles.indexOf(role);
        if(index !== -1) {
          this.roles.splice(index, 1);
        }
        this.log.warn(role.name + ' deleted!');
      });
    } else {
      var index = this.roles.indexOf(role);
      if(index !== -1) {
        this.roles.splice(index, 1);
      }
      this.log.warn(role.name || 'item' + ' deleted!');
    }
  }

  activate() {
    [
      {id: 1, name: 'first'},
      {id: 2, name: 'second'},
      {id: 3, name: 'third'},
      {id: 4, name: 'fourth'},
      {id: 5, name: 'fifth'}
    ].forEach(function (role) {
      this.roles.push(new Role(role, this.validation));
    }.bind(this));
  }
}
