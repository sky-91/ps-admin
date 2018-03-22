import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';
import {HttpService} from '../../../shared/http/http.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-important-person-list',
  templateUrl: './important-person-list.component.html',
  styleUrls: ['./important-person-list.component.scss']
})
export class ImportantPersonListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = this.userBusinessService.listImportantPerson();
  exportUrl: string = this.userBusinessService.exportImportantPerson();

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
  controlKeyword: string;
  groupType: string;
  idCard: string;
  name: string;
  phoneText: string;
  wechatNameText: string;
  jurisdiction: string;
  juriPolice: string;
  sex: string;
  startAge: number;
  endAge: number;

  pageList: Array<number> = [15, 25, 50, 100];

  btnCls = 'btn-outline-info';

  constructor(private appService: AppService,
              private httpService: HttpService,
              private userBusinessService: UserBusinessService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService) {
    this.appService.titleEventEmitter.emit('重点人员列表');
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
    this.param.controlKeyword = this.controlKeyword === undefined ? undefined : this.controlKeyword.trim();
    this.param.groupType = this.groupType === undefined ? undefined : this.groupType.trim();
    this.param.idCard = this.idCard === undefined ? undefined : this.idCard.trim();
    this.param.name = this.name === undefined ? undefined : this.name.trim();
    this.param.phoneText = this.phoneText === undefined ? undefined : this.phoneText.trim();
    this.param.wechatNameText = this.wechatNameText === undefined ? undefined : this.wechatNameText.trim();
    this.param.jurisdiction = this.jurisdiction === undefined ? undefined : this.jurisdiction.trim();
    this.param.juriPolice = this.juriPolice === undefined ? undefined : this.juriPolice.trim();
    this.param.sex = this.sex;
    switch (this.sex) {
      case '':
        this.param.sex = undefined;
        break;
      case 'true':
        this.param.sex = true;
        break;
      case 'false':
        this.param.sex = false;
        break;
    }
    this.param.startAge = this.startAge;
    this.param.endAge = this.endAge;
  }

  forwardDetail(idCard: string) {
    this.router.navigate(['/app/important-person/important-person-detail/' + idCard]);
  }

  forwardEdit(idCard: string) {
    this.router.navigate(['/app/important-person/important-person-edit/' + idCard]);
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
      this.httpService.delete(this.userBusinessService.deleteImportantPerson() + this.deleteIdCard, null, function (successful, data, res) {
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
    this.controlKeyword = null;
    this.groupType = null;
    this.idCard = null;
    this.name = null;
    this.phoneText = null;
    this.wechatNameText = null;
    this.jurisdiction = null;
    this.juriPolice = null;
    this.sex = null;
    this.startAge = null;
    this.endAge = null;
  }

  ngOnInit() {
  }

}
