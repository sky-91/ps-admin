import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AppService} from '../../../app.service';
import {BsModalService} from 'ngx-bootstrap';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ImportantPerson} from '../model/ImportantPerson';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-important-person-detail',
  templateUrl: './important-person-detail.component.html',
  styleUrls: ['./important-person-detail.component.scss']
})
export class ImportantPersonDetailComponent implements OnInit {

  person: ImportantPerson;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('重点人员-详情');
  }

  ngOnInit() {
    this.person = new ImportantPerson();
    const idCard = this.route.snapshot.paramMap.get('idCard');
    const that = this;
    if (idCard !== null) {
      this.httpService.get(this.userBusinessService.getImportantPerson() + idCard, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.person = data;
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
    this.router.navigate(['/app/important-person/important-person-list']);
  }
}
