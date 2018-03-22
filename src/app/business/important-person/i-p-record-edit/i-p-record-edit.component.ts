import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {DatepickerI18n, DatepickerI18nType} from '../../../shared/datepickerI18n/datepickerI18n';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ImportantPersonRecord} from '../model/ImportantPersonRecord';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-i-p-record-edit',
  templateUrl: './i-p-record-edit.component.html',
  styleUrls: ['./i-p-record-edit.component.scss'],
  providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})
export class IPRecordEditComponent implements OnInit {

  recordForm: FormGroup;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  record: ImportantPersonRecord;
  isEdit: boolean;

  datePickerConfig = {
    closeOnSelect: true,
    locale: 'zh-CN',
    format: 'YYYY-MM-DD',
    firstDayOfWeek: 'mo'
  };

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('轨迹积分-编辑');
  }

  ngOnInit() {
    this.recordForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(20)])),
      idCard: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)'), Validators.minLength(18), Validators.maxLength(18)]))
    });
    const pk = this.route.snapshot.paramMap.get('pk');
    this.isEdit = false;
    this.record = new ImportantPersonRecord();
    const that = this;
    if (pk !== null) {
      this.httpService.get(this.userBusinessService.getPersonRecord() + pk, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.record = data;
          that.isEdit = true;
          const nameControl = that.recordForm.get('name');
          nameControl.setValue(that.record.name);
          const idControl = that.recordForm.get('idCard');
          idControl.setValue(that.record.idCard);
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

  submit(template: TemplateRef<any>) {
    if (this.recordForm.valid) {
      this.record.name = this.recordForm.controls['name'].value.trim();
      this.record.idCard = this.recordForm.controls['idCard'].value;
      const that = this;
      if (this.isEdit) {
        this.httpService.put(this.userBusinessService.updatePersonRecord(), this.record, function (successful, data, res) {
          if (successful && typeof data === 'boolean' && data) {
            that.modalRef = that.modalService.show(template, that.modalConfig);
          } else {
            const toastCfg = new ToastConfig(ToastType.ERROR, '', '修改提交失败！', 3000);
            that.toastService.toast(toastCfg);
          }
        }, function (successful, msg, err) {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
          that.toastService.toast(toastCfg);
          console.log(err);
        });
      } else {
        this.httpService.post(this.userBusinessService.savePersonRecord(), this.record, function (successful, data, res) {
          if (successful && typeof data === 'boolean' && data) {
            that.modalRef = that.modalService.show(template, that.modalConfig);
          } else {
            const toastCfg = new ToastConfig(ToastType.ERROR, '', '保存提交失败！', 3000);
            that.toastService.toast(toastCfg);
          }
        }, function (successful, msg, err) {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
          that.toastService.toast(toastCfg);
          console.log(err);
        });
      }
    }
  }

  returnHome(): void {
    this.modalRef.hide();
    this.router.navigate(['/app/home']);
  }

  returnList(): void {
    this.modalRef.hide();
    this.goList();
  }

  goList(): void {
    this.router.navigate(['/app/important-person/i-p-record-list']);
  }

  onKeyPress(event: any) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || key === 'x') {
      event.returnValue = true;
    } else {
      event.returnValue = false;
    }
  }
}
