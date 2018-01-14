import {Component, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {ToastService} from '../../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../../shared/toast/toast-model';
import {CustomValidators} from '../../shared/custom-validator/custom-validator';

/**
 * 修改密码组件
 */
@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.component.html',
  encapsulation: ViewEncapsulation.None
})
export class PasswordEditComponent {

  passwordEditForm: FormGroup;


  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private formBuilder: FormBuilder) {
    const oldPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    const passwordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    const certainPasswordFc = new FormControl('', CustomValidators.equalTo(passwordFc));

    this.passwordEditForm = this.formBuilder.group({
      oldPassword: oldPasswordFc,
      password: passwordFc,
      certainPassword: certainPasswordFc
    });
  }

  /**
   * 上传
   */
  ok(): void {
    if (this.passwordEditForm.valid) {
      console.log(this.passwordEditForm.value);
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功!', 2000);
      this.toastService.toast(toastCfg);
      this.close();
    }
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({status: 'closed'});
  }

}
