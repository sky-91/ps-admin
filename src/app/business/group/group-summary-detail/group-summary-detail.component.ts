import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {GroupSummary} from '../model/GroupSummary';
import {BsModalService} from 'ngx-bootstrap';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-group-summary-detail',
  templateUrl: './group-summary-detail.component.html',
  styleUrls: ['./group-summary-detail.component.scss']
})
export class GroupSummaryDetailComponent implements OnInit {

  summary: GroupSummary;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('汇总信息-详情');
  }

  ngOnInit() {
    this.summary = new GroupSummary();
    const groupName = this.route.snapshot.paramMap.get('name');
    const that = this;
    if (groupName !== null) {
      this.httpService.get(this.userBusinessService.getGroupSummary() + groupName, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.summary = data;
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
    this.router.navigate(['/app/group/group-summary-list']);
  }
}
