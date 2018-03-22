import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {ImportantPerson} from '../model/ImportantPerson';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-important-person-edit',
  templateUrl: './important-person-edit.component.html',
  styleUrls: ['./important-person-edit.component.scss']
})
export class ImportantPersonEditComponent implements OnInit {

  infoForm: FormGroup;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  person: ImportantPerson;
  isEdit: boolean;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('重点人员-编辑');
  }

  ngOnInit() {
    this.infoForm = new FormGroup({
      name: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(20)])),
      idCard: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)'), Validators.minLength(18), Validators.maxLength(18)]))
    });
    const idCard = this.route.snapshot.paramMap.get('idCard');
    this.isEdit = false;
    this.person = new ImportantPerson();
    const that = this;
    if (idCard !== null) {
      this.httpService.get(this.userBusinessService.getImportantPerson() + idCard, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.person = data;
          that.isEdit = true;
          const nameControl = that.infoForm.get('name');
          nameControl.setValue(that.person.name);
          const idControl = that.infoForm.get('idCard');
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
      this.person.name = this.infoForm.controls['name'].value.trim();
      this.person.idCard = this.infoForm.controls['idCard'].value;
      const that = this;
      if (this.isEdit) {
        this.httpService.put(this.userBusinessService.updateImportantPerson(), this.person, function (successful, data, res) {
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
        this.httpService.post(this.userBusinessService.saveImportantPerson(), this.person, function (successful, data, res) {
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
    this.router.navigate(['/app/important-person/important-person-list']);
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
