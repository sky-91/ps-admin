import {Component, OnInit, ViewChild} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';

@Component({
  selector: 'app-important-person-list',
  templateUrl: './important-person-list.component.html',
  styleUrls: ['./important-person-list.component.scss']
})
export class ImportantPersonListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = environment.domain + 'importantPerson/listForPage';

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
