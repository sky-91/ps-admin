import {Injectable} from '@angular/core';

@Injectable()
export class UserBusinessService {

  contextPath = '/policesys';

  constructor() {
  }

  /**
   * 登录
   */
  login() {
    return this.contextPath + '/login/submit';
  }

  saveSpecialPerson() {
    return this.contextPath + '/person/save';
  }

  updateSpecialPerson() {
    return this.contextPath + '/person/update';
  }

  getSpecialPerson() {
    return this.contextPath + '/person/getById/';
  }

  listSpecialPerson() {
    return this.contextPath + '/person/listForPage';
  }

  uploadSpecialPerson() {
    return this.contextPath + '/person/upload';
  }

  exportSpecialPerson() {
    return this.contextPath + '/person/export';
  }

  deleteSpecialPerson() {
    return this.contextPath + '/person/deleteById/';
  }

  saveImportantPerson() {
    return this.contextPath + '/importantPerson/save';
  }

  updateImportantPerson() {
    return this.contextPath + '/importantPerson/update';
  }

  getImportantPerson() {
    return this.contextPath + '/importantPerson/getById/';
  }

  listImportantPerson() {
    return this.contextPath + '/importantPerson/listForPage';
  }

  uploadImportantPerson() {
    return this.contextPath + '/importantPerson/upload';
  }

  exportImportantPerson() {
    return this.contextPath + '/importantPerson/export';
  }

  deleteImportantPerson() {
    return this.contextPath + '/importantPerson/deleteById/';
  }

  savePersonRecord() {
    return this.contextPath + '/importantPerson/record/save';
  }

  updatePersonRecord() {
    return this.contextPath + '/importantPerson/record/update';
  }

  getPersonRecord() {
    return this.contextPath + '/importantPerson/record/getByPk/';
  }

  listPersonRecord() {
    return this.contextPath + '/importantPerson/record/listForPage';
  }

  uploadPersonRecord() {
    return this.contextPath + '/importantPerson/record/upload';
  }

  exportPersonRecord() {
    return this.contextPath + '/importantPerson/record/export';
  }

  deletePersonRecord() {
    return this.contextPath + '/importantPerson/record/deleteByPk/';
  }

  saveGroupSummary() {
    return this.contextPath + '/group/groupSummary/save';
  }

  updateGroupSummary() {
    return this.contextPath + '/group/groupSummary/update';
  }

  getGroupSummary() {
    return this.contextPath + '/group/groupSummary/getByName/';
  }

  listGroupSummary() {
    return this.contextPath + '/group/groupSummary/listForPage';
  }

  uploadGroupSummary() {
    return this.contextPath + '/group/groupSummary/upload';
  }

  exportGroupSummary() {
    return this.contextPath + '/group/groupSummary/export';
  }

  deleteGroupSummary() {
    return this.contextPath + '/group/groupSummary/deleteByName/';
  }

  saveGroupRecord() {
    return this.contextPath + '/group/groupRecord/save';
  }

  updateGroupRecord() {
    return this.contextPath + '/group/groupRecord/update';
  }

  getGroupRecord() {
    return this.contextPath + '/group/groupRecord/getByPk/';
  }

  listGroupRecord() {
    return this.contextPath + '/group/groupRecord/listForPage';
  }

  uploadGroupRecord() {
    return this.contextPath + '/group/groupRecord/upload';
  }

  exportGroupRecord() {
    return this.contextPath + '/group/groupRecord/export';
  }

  deleteGroupRecord() {
    return this.contextPath + '/group/groupRecord/deleteByPk/';
  }
}
