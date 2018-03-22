import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';
import {BsModalService} from 'ngx-bootstrap';
import {AppService} from '../../../app.service';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {SpecialPerson} from '../model/SpecialPerson';

@Component({
  selector: 'app-special-person-detail',
  templateUrl: './special-person-detail.component.html',
  styleUrls: ['./special-person-detail.component.scss']
})
export class SpecialPersonDetailComponent implements OnInit {

  person: SpecialPerson;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('疆藏人员-详情');
  }

  ngOnInit() {
    this.person = new SpecialPerson();
    const idCard = this.route.snapshot.paramMap.get('idCard');
    const that = this;
    if (idCard !== null) {
      this.httpService.get(this.userBusinessService.getSpecialPerson() + idCard, null, function (successful, data, res) {
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
    this.router.navigate(['/app/special-person/special-person-list']);
  }
}
