import {Component, OnInit, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';

import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-special-person-list',
  templateUrl: './special-person-list.component.html',
  styleUrls: ['./special-person-list.component.scss']
})
export class SpecialPersonListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = environment.domain + 'person/listForPage';

  method = 'get';

  param: any = {};

  pageList: Array<number> = [15, 25, 35];

  btnCls = 'btn-outline-info';

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('疆藏人员列表');
  }

  search() {
    this.pageList = [10, 15, 20];

    this.hp.search();
  }

  ngOnInit() {
  }

}
