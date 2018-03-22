import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {HttpService} from '../../../shared/http/http.service';
import {DatepickerI18n, DatepickerI18nType} from '../../../shared/datepickerI18n/datepickerI18n';
import {NgbDatepickerI18n} from '@ng-bootstrap/ng-bootstrap';
import {SpecialPerson} from '../model/SpecialPerson';
import {ToastService} from '../../../shared/toast/toast.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-special-person-edit',
  templateUrl: './special-person-edit.component.html',
  styleUrls: ['./special-person-edit.component.scss'],
  providers: [DatepickerI18nType, {provide: NgbDatepickerI18n, useClass: DatepickerI18n}]
})
export class SpecialPersonEditComponent implements OnInit {

  infoForm: FormGroup;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  person: SpecialPerson;
  isEdit: boolean;

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

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('疆藏人员-编辑');
  }

  ngOnInit() {
    this.infoForm = new FormGroup({
      spName: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(20)])),
      spIdCard: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)'), Validators.minLength(18), Validators.maxLength(18)]))
    });
    const idCard = this.route.snapshot.paramMap.get('idCard');
    this.isEdit = false;
    this.person = new SpecialPerson();
    const that = this;
    if (idCard !== null) {
      this.httpService.get(this.userBusinessService.getSpecialPerson() + idCard, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.person = data;
          that.isEdit = true;
          const nameControl = that.infoForm.get('spName');
          nameControl.setValue(that.person.name);
          const idControl = that.infoForm.get('spIdCard');
          idControl.setValue(that.person.idCard);
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
    if (this.infoForm.valid) {
      this.person.name = this.infoForm.controls['spName'].value.trim();
      this.person.idCard = this.infoForm.controls['spIdCard'].value;
      const that = this;
      if (this.isEdit) {
        this.httpService.put(this.userBusinessService.updateSpecialPerson(), this.person, function (successful, data, res) {
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
        this.httpService.post(this.userBusinessService.saveSpecialPerson(), this.person, function (successful, data, res) {
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
    this.router.navigate(['/app/special-person/special-person-list']);
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
