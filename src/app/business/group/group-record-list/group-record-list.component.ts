import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {DatepickerI18n, DatepickerI18nType} from '../../../shared/datepickerI18n/datepickerI18n';
import {HttpService} from '../../../shared/http/http.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-group-record-list',
  templateUrl: './group-record-list.component.html',
  styleUrls: ['./group-record-list.component.scss'],
  providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})
export class GroupRecordListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = this.userBusinessService.listGroupRecord();
  exportUrl: string = this.userBusinessService.exportGroupRecord();

  method = 'get';

  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  deletePk: string;
  deleteName: string;

  introRef: BsModalRef;
  content: string;

  param: any = {};
  groupName: string;
  petitionLocation: string;
  petitionRegion: string;
  inciteMethod: string;
  startRecordDate: string;
  endRecordDate: string;

  pageList: Array<number> = [15, 25, 50, 100];

  btnCls = 'btn-outline-info';

  datePickerConfig = {
    closeOnSelect: true,
    locale: 'zh-CN',
    format: 'YYYY-MM-DD',
    firstDayOfWeek: 'mo'
  };

  constructor(private appService: AppService,
              private httpService: HttpService,
              private userBusinessService: UserBusinessService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService) {
    this.appService.titleEventEmitter.emit('活动记录列表');
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
    this.param.groupName = this.groupName === undefined ? undefined : this.groupName.trim();
    this.param.petitionLocation = this.petitionLocation === undefined ? undefined : this.petitionLocation.trim();
    this.param.petitionRegion = this.petitionRegion === undefined ? undefined : this.petitionRegion.trim();
    this.param.inciteMethod = this.inciteMethod === undefined ? undefined : this.inciteMethod.trim();
    this.param.startRecordDate = this.startRecordDate;
    this.param.endRecordDate = this.endRecordDate;
  }

  forwardEdit(pk: string) {
    this.router.navigate(['/app/group/group-record-edit/' + pk]);
  }

  forwardDetail(pk: string) {
    this.router.navigate(['/app/group/group-record-detail/' + pk]);
  }

  introPopup(template: TemplateRef<any>, content: string) {
    this.content = content;
    this.introRef = this.modalService.show(template, this.modalConfig);
  }

  deletePopup(template: TemplateRef<any>, deletePk: string, deleteName: string) {
    this.deletePk = deletePk;
    this.deleteName = deleteName;
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  confirmDelete() {
    this.modalRef.hide();
    const that = this;
    if (this.deletePk !== undefined && this.deletePk !== '') {
      this.httpService.delete(this.userBusinessService.deleteGroupRecord() + this.deletePk, null, function (successful, data, res) {
        if (successful && typeof data === 'boolean' && data) {
          that.hp.search();
          const toastCfg = new ToastConfig(ToastType.INFO, '', that.deletePk + ' 删除成功!', 3000);
          that.toastService.toast(toastCfg);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', that.deletePk + ' 删除失败!', 3000);
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
    this.groupName = null;
    this.groupName = null;
    this.petitionLocation = null;
    this.petitionRegion = null;
    this.inciteMethod = null;
    this.startRecordDate = null;
    this.endRecordDate = null;
  }

  ngOnInit() {
  }

}
