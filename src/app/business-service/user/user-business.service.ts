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
}
