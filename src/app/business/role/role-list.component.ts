import {Component, ViewChild} from '@angular/core';
import {AppService} from '../../app.service';

import {HttpPaginationComponent} from '../../shared/pagination/http-pagination.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html'
})
export class RoleListComponent {

  @ViewChild('hp', undefined) hp: HttpPaginationComponent;

  url = '';

  param: any = {};

  pageList: Array<number> = [15, 25, 50, 100];

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('角色列表');
  }

  onDataChanged($event) {
    console.log($event);
  }
}
