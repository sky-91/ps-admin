import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';

@Component({
  selector: 'app-group-summary-list',
  templateUrl: './group-summary-list.component.html',
  styleUrls: ['./group-summary-list.component.scss']
})
export class GroupSummaryListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = environment.domain + 'group/GroupSummary/listForPage';

  method = 'get';

  param: any = {};

  pageList: Array<number> = [15, 25, 35];

  btnCls = 'btn-outline-info';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('群体汇总列表');
  }

  search() {
    this.pageList = [10, 15, 20];

    this.hp.search();
  }

  ngOnInit() {
  }

}
