import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {ImportantPersonRecord} from '../model/ImportantPersonRecord';
import {BsModalService} from 'ngx-bootstrap';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-i-p-record-detail',
  templateUrl: './i-p-record-detail.component.html',
  styleUrls: ['./i-p-record-detail.component.scss']
})
export class IPRecordDetailComponent implements OnInit {

  record: ImportantPersonRecord;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('轨迹积分-详情');
  }

  ngOnInit() {
    this.record = new ImportantPersonRecord();
    const pk = this.route.snapshot.paramMap.get('pk');
    const that = this;
    if (pk !== null) {
      this.httpService.get(this.userBusinessService.getPersonRecord() + pk, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.record = data;
        } else if (data.httpStatus !== undefined && data.httpStatus > 300) {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', data.message, 3000);
          that.toastService.toast(toastCfg);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', '请求已发送，服务器未知错误', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
        console.log(err);
      });
    }
  }

  goList(): void {
    this.router.navigate(['/app/important-person/i-p-record-list']);
  }
}
