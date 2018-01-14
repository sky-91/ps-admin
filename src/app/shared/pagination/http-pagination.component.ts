import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {HttpService} from '../http/http.service';
import {Utils} from '../util/utils';
import {ToastService} from '../toast/toast.service';
import {ToastConfig, ToastType} from '../toast/toast-model';

import {HttpPaginationMethod, PaginationType} from './pagination-model';


/**
 * app-http-pagination组件
 */
@Component({
  selector: 'app-http-pagination',
  template: `
    <app-pagination [total]="total" [pageList]="pageList" [btnCls]="btnCls" (onPageChanged)="onPageChanged($event)"></app-pagination>
  `
})
export class HttpPaginationComponent implements OnInit {

  @Input()
  pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

  @Input()
  btnCls = 'btn-light';

  @Input()
  url: string;

  @Input()
  method = 'post';

  @Input()
  param: any = new Object();

  @Output()
  onDataChanged = new EventEmitter();

  total = 0;
  pageSize: number = this.pageList[0];
  pageNumber = 1;

  constructor(private httpService: HttpService, private toastService: ToastService) {

  }

  /**
   * 初始化
   */
  ngOnInit() {
    this.getServerData();
  }

  /**
   * 查询方法
   */
  search() {
    this.getServerData();
  }

  /**
   * 获得服务器数据
   */
  private getServerData() {
    const that = this;
    let serviceData: any = {};
    if (Utils.isArray(this.param)) {
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
      serviceData.list = this.param;
    } else if (Utils.isObject(this.param)) {
      this.param.pageNumber = this.pageNumber;
      this.param.pageSize = this.pageSize;
      serviceData = this.param;
    } else {
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
    }

    if (this.method === HttpPaginationMethod.GET && Utils.isNotEmpty(this.url)) {
      this.httpService.get(this.url, serviceData, function (successful, data, res) {
        if (successful) {
          that.serverDataProcess(data);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });
    } else if (Utils.isNotEmpty(this.url)) {
      this.httpService.post(this.url, serviceData, function (successful, data, res) {
        if (successful) {
          that.serverDataProcess(data);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });
    } else {
      console.error('app-http-pagination组件请求时，url参数为空！');
    }
  }

  /**
   * 服务器端数据处理
   * @param data 数据
   */
  private serverDataProcess(data: any) {
    if (data && data.total && data.rows) {
      this.total = data.total;
      this.onDataChanged.emit(data.rows);
    } else {
      console.error('app-http-pagination,返回的数据格式不正确！');
    }
  }

  /**
   * 分页改变事件
   * @param event
   */
  onPageChanged($event) {
    if ($event.type !== PaginationType.PAGE_INIT) {
      this.pageSize = $event.pageSize;
      this.pageNumber = $event.pageNumber;
      this.getServerData();
    }
  }

}