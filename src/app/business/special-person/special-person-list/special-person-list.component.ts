import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../../app.service';
import {HttpService} from '../../../shared/http/http.service';
import {DatepickerI18n, DatepickerI18nType} from '../../../shared/datepickerI18n/datepickerI18n';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastService} from '../../../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-special-person-list',
  templateUrl: './special-person-list.component.html',
  styleUrls: ['./special-person-list.component.scss'],
  providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})
export class SpecialPersonListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = this.userBusinessService.listSpecialPerson();
  exportUrl: string = this.userBusinessService.exportSpecialPerson();
  method = 'get';

  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  deleteIdCard: string;
  deleteName: string;

  param: any = {};
  startActivityTime: string;
  endActivityTime: string;
  startPushTime: string;
  endPushTime: string;
  jurisdiction: string;
  personType: string;
  resourceName: string;

  pageList: Array<number> = [15, 25, 50, 100];

  btnCls = 'btn-outline-info';

  datePickerConfig = {
    closeOnSelect: true,
    locale: 'zh-CN',
    format: 'YYYY-MM-DD',
    firstDayOfWeek: 'mo'
  };

  timePickerConfig = {
    closeOnSelect: true,
    locale: 'zh-CN',
    format: 'YYYY-MM-DD HH:mm:ss',
    firstDayOfWeek: 'mo'
  };

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService) {
    this.appService.titleEventEmitter.emit('疆藏人员列表');
  }

  search() {
    this.pageList = [15, 25, 50, 100];
    this.setParam();
    this.hp.search();
  }

  export() {
    this.setParam();
    this.httpService.export(this.exportUrl, this.param);
  }

  setParam() {
    this.param.startActivityTime = this.startActivityTime;
    this.param.endActivityTime = this.endActivityTime;
    this.param.startPushTime = this.startPushTime;
    this.param.endPushTime = this.endPushTime;
    this.param.jurisdiction = this.jurisdiction === undefined ? undefined : this.jurisdiction.trim();
    switch (this.personType) {
      case '':
        this.param.personType = undefined;
        break;
      case 'true':
        this.param.personType = true;
        break;
      case 'false':
        this.param.personType = false;
        break;
    }
    this.param.resourceName = this.resourceName === undefined ? undefined : this.resourceName.trim();
  }

  forwardEdit(idCard: string) {
    this.router.navigate(['/app/special-person/special-person-edit/' + idCard]);
  }

  forwardDetail(idCard: string) {
    this.router.navigate(['/app/special-person/special-person-detail/' + idCard]);
  }

  deletePopup(template: TemplateRef<any>, deleteIdCard: string, deleteName: string) {
    this.deleteIdCard = deleteIdCard;
    this.deleteName = deleteName;
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  confirmDelete() {
    this.modalRef.hide();
    const that = this;
    if (this.deleteIdCard !== undefined && this.deleteIdCard !== '') {
      this.httpService.delete(this.userBusinessService.deleteSpecialPerson() + this.deleteIdCard, null, function (successful, data, res) {
        if (successful && typeof data === 'boolean' && data) {
          that.hp.search();
          const toastCfg = new ToastConfig(ToastType.INFO, '', that.deleteIdCard + ' 删除成功!', 3000);
          that.toastService.toast(toastCfg);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', that.deleteIdCard + ' 删除失败!', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
        console.log(err);
      });
    }
  }

  clear() {
    this.startActivityTime = null;
    this.endActivityTime = null;
    this.startPushTime = null;
    this.endPushTime = null;
    this.jurisdiction = null;
    this.personType = null;
    this.resourceName = null;
  }

  ngOnInit() {
  }

}
