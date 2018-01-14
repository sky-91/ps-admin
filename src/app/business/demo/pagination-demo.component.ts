import {Component} from '@angular/core';

import {AppService} from '../../app.service';


@Component({
  selector: 'app-pagination-demo',
  template: `
    <div class="c-content-inner">
      <div class="row">
        <div class="col-md-12">
          <p class="c-line-title">示例</p>
          <button type="button" class="btn btn-primary" (click)="changeData()">更换数据</button>
          <div class="c-mt15">
            <app-pagination [total]="options.total" [pageList]="options.pageList" [btnCls]="btnCls"
                          (onPageChanged)="onPageChanged($event)"></app-pagination>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="c-mt15">
            <p class="c-line-title">说明</p>
            组件目录:src/app/modules/shared/pagination
          </div>
        </div>
      </div>
    </div>
  `
})
export class PaginationDemoComponent {


  btnCls = 'btn-outline-info';

  options: any = {
    total: 60, // 总条数
    pageList: [15, 25, 35] // 每页显示条数
  };


  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('分页');
  }

  onPageChanged($event) {
    console.log($event);
  }

  changeData() {
    this.options = {
      total: 10, // 总条数
      pageList: [10, 15, 20] // 每页显示条数

    };
  }


}
