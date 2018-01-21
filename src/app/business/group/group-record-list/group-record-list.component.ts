import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';

@Component({
  selector: 'app-group-record-list',
  templateUrl: './group-record-list.component.html',
  styleUrls: ['./group-record-list.component.scss']
})
export class GroupRecordListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = environment.domain + 'group/groupRecord/listForPage';

  method = 'get';

  param: any = {};

  pageList: Array<number> = [15, 25, 35];

  btnCls = 'btn-outline-info';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('重点人员列表');
  }

  search() {
    this.pageList = [10, 15, 20];

    this.hp.search();
  }

  ngOnInit() {
  }

}
