import {Component, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../../app.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {GroupSummary} from '../model/GroupSummary';
import {HttpService} from '../../../shared/http/http.service';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-group-summary-edit',
  templateUrl: './group-summary-edit.component.html',
  styleUrls: ['./group-summary-edit.component.scss']
})
export class GroupSummaryEditComponent implements OnInit {

  summaryForm: FormGroup;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  summary: GroupSummary;
  isEdit: boolean;

  constructor(private route: ActivatedRoute,
              private appService: AppService,
              private httpService: HttpService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('汇总信息-编辑');
  }

  ngOnInit() {
    this.summaryForm = new FormGroup({
      groupName: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1), Validators.maxLength(30)])),
    });
    const groupName = this.route.snapshot.paramMap.get('name');
    this.isEdit = false;
    this.summary = new GroupSummary();
    const that = this;
    if (groupName !== null) {
      this.httpService.get(this.userBusinessService.getGroupSummary() + groupName, null, function (successful, data, res) {
        if (successful && data.httpStatus === undefined) {
          that.summary = data;
          that.isEdit = true;
          const groupNameControl = that.summaryForm.get('groupName');
          groupNameControl.setValue(that.summary.groupName);
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
    if (this.summaryForm.valid) {
      this.summary.groupName = this.summaryForm.controls['groupName'].value.trim();
      const that = this;
      if (this.isEdit) {
        this.httpService.put(this.userBusinessService.updateGroupSummary(), this.summary, function (successful, data, res) {
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
        this.httpService.post(this.userBusinessService.saveGroupSummary(), this.summary, function (successful, data, res) {
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
    this.router.navigate(['/app/group/group-summary-list']);
  }
}
