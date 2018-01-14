import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Md5} from 'ts-md5/dist/md5';
import {HttpService} from '../shared/http/http.service';
import {ToastService} from '../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../shared/toast/toast-model';
import {UserBusinessService} from '../business-service/user/user-business.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router,
              private toastService: ToastService,
              private httpService: HttpService,
              private userBusinessService: UserBusinessService,
              private formBuilder: FormBuilder) {
    const userNameFc = new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(3), Validators.maxLength(15)]));
    const passwordFc = new FormControl('', Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(15)]));

    this.loginForm = this.formBuilder.group({
      userName: userNameFc,
      password: passwordFc
    });
  }

  /**
   * 初始化
   */
  ngOnInit() {

  }

  /**
   * 登录
   */
  login() {
    if (this.loginForm.valid) {
      this.httpService.originalPost(this.userBusinessService.login() +
        '?username=' + this.loginForm.controls['userName'].value +
        '&password=' + Md5.hashStr(this.loginForm.controls['password'].value).toString(), null).subscribe(res => {
        console.log(res);
        if (res.success) {
          const config = new ToastConfig(ToastType.SUCCESS, '', res.message, 3000);
          this.toastService.toast(config);
          this.router.navigate(['/app/home']);
        } else {
          const config = new ToastConfig(ToastType.ERROR, '', res.message, 3000);
          this.toastService.toast(config);
        }
      });
    }
  }
}
