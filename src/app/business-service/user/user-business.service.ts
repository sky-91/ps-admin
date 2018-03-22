import {Injectable} from '@angular/core';

@Injectable()
export class UserBusinessService {

  constructor() {
  }

  /**
   * 登录
   */
  login() {
    return '/login/submit';
  }

  saveSpecialPerson() {
    return '/person/save';
  }

  updateSpecialPerson() {
    return '/person/update';
  }

  getSpecialPerson() {
    return '/person/getById/';
  }

  listSpecialPerson() {
    return '/person/listForPage';
  }

  uploadSpecialPerson() {
    return '/person/upload';
  }

  exportSpecialPerson() {
    return '/person/export';
  }

  deleteSpecialPerson() {
    return '/person/deleteById/';
  }

  saveImportantPerson() {
    return '/importantPerson/save';
  }

  updateImportantPerson() {
    return '/importantPerson/update';
  }

  getImportantPerson() {
    return '/importantPerson/getById/';
  }

  listImportantPerson() {
    return '/importantPerson/listForPage';
  }

  uploadImportantPerson() {
    return '/importantPerson/upload';
  }

  exportImportantPerson() {
    return '/importantPerson/export';
  }

  deleteImportantPerson() {
    return '/importantPerson/deleteById/';
  }

  savePersonRecord() {
    return '/importantPerson/record/save';
  }

  updatePersonRecord() {
    return '/importantPerson/record/update';
  }

  getPersonRecord() {
    return '/importantPerson/record/getByPk/';
  }

  listPersonRecord() {
    return '/importantPerson/record/listForPage';
  }

  uploadPersonRecord() {
    return '/importantPerson/record/upload';
  }

  exportPersonRecord() {
    return '/importantPerson/record/export';
  }

  deletePersonRecord() {
    return '/importantPerson/record/deleteByPk/';
  }

  saveGroupSummary() {
    return '/group/groupSummary/save';
  }

  updateGroupSummary() {
    return '/group/groupSummary/update';
  }

  getGroupSummary() {
    return '/group/groupSummary/getByName/';
  }

  listGroupSummary() {
    return '/group/groupSummary/listForPage';
  }

  uploadGroupSummary() {
    return '/group/groupSummary/upload';
  }

  exportGroupSummary() {
    return '/group/groupSummary/export';
  }

  deleteGroupSummary() {
    return '/group/groupSummary/deleteByName/';
  }

  saveGroupRecord() {
    return '/group/groupRecord/save';
  }

  updateGroupRecord() {
    return '/group/groupRecord/update';
  }

  getGroupRecord() {
    return '/group/groupRecord/getByPk/';
  }

  listGroupRecord() {
    return '/group/groupRecord/listForPage';
  }

  uploadGroupRecord() {
    return '/group/groupRecord/upload';
  }

  exportGroupRecord() {
    return '/group/groupRecord/export';
  }

  deleteGroupRecord() {
    return '/group/groupRecord/deleteByPk/';
  }
}
