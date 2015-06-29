import {Http} from 'service/http';
import {Logger} from 'service/logger';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {I18N} from 'aurelia-i18next';

@inject(Http, Logger, Router, I18N)
export class ViewRequests {
  constructor(http, logger, router, i18n) {
    this.http = http;
    this.router = router;
    this.logger = logger;
    this.i18n = i18n;

    this.requestStates = [];
    this.requestTypes = [];
    this.allCategories = [];
    this.categories = [];
    this.specialities = [];
    this.courses = [];

    this.requestStateId = '';
    this.requestTypeId = '';
    this.categoryId = '';
    this.specialityId = '';
    this.course = '';
    this.facultyNumber = '';

    this.requests = [];
  }

  requestTypeChange(requestTypeId) {
    if (requestTypeId) {
      requestTypeId = parseInt(requestTypeId, 10);

      var categories = this.allCategories.filter(function (category) {
        return category.requestTypeId === requestTypeId;
      });

      this.categories = categories;
    } else {
      this.categories = this.allCategories;
    }
  }

  filter() {
    var self = this;

    var filterData = {
      requestStateId: this.requestStateId,
      requestTypeId: this.requestTypeId,
      categoryId: this.categoryId,
      specialityId: this.specialityId,
      course: this.course,
      facultyNumber: this.facultyNumber
    };

    this.http.post('requests/', filterData)
      .then(requestsData => {
        if (requestsData.length === 0) {
          self.logger.warn(self.i18n.tr('common.noFilteredData'));
        } else {
          self.requests = requestsData;
        }
      })
      .catch(error => {
        self.logger.error(self.i18n.tr('common.unsuccessfull_load'));
      });
  }

  activate() {
    var self = this;

    var req = this.http.get('requests/filter')
      .then(filterData => {
        self.requestStates = filterData.requestStates;
        self.requestTypes = filterData.requestTypes;
        self.allCategories = filterData.categories;
        self.categories = filterData.categories;
        self.specialities = filterData.specialities;
        self.courses = filterData.courses;
      })
      .catch(error => {
        self.logger.error(self.i18n.tr('common.unsuccessfull_load'));
      });

    return req;
  }
}
