import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {AppService} from '../../../app.service';
import {SimpleDataHttpPageComponent} from '../../../shared/simple-data-table/simple-data-http-page.component';
import {HttpService} from '../../../shared/http/http.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Router} from '@angular/router';
import {ToastService} from '../../../shared/toast/toast.service';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {ToastConfig, ToastType} from '../../../shared/toast/toast-model';

@Component({
  selector: 'app-group-summary-list',
  templateUrl: './group-summary-list.component.html',
  styleUrls: ['./group-summary-list.component.scss']
})
export class GroupSummaryListComponent implements OnInit {

  @ViewChild('hp', undefined) hp: SimpleDataHttpPageComponent;

  url: string = this.userBusinessService.listGroupSummary();
  exportUrl: string = this.userBusinessService.exportGroupSummary();

  method = 'get';

  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  deleteGroupName: string;
  deleteName: string;

  param: any = {};
  groupName: string;
  groupType: string;

  pageList: Array<number> = [15, 25, 50, 100];

  btnCls = 'btn-outline-info';

  constructor(private appService: AppService,
              private httpService: HttpService,
              private userBusinessService: UserBusinessService,
              private modalService: BsModalService,
              private router: Router,
              private toastService: ToastService) {
    this.appService.titleEventEmitter.emit('群体汇总列表');
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
    this.param.groupType = this.groupType === undefined ? undefined : this.groupType.trim();
  }

  forwardEdit(groupName: string) {
    this.router.navigate(['/app/group/group-summary-edit/' + groupName]);
  }

  forwardDetail(groupName: string) {
    this.router.navigate(['/app/group/group-summary-detail/' + groupName]);
  }

  deletePopup(template: TemplateRef<any>, deleteKey: string, deleteName: string) {
    this.deleteGroupName = deleteKey;
    this.deleteName = deleteName;
    this.modalRef = this.modalService.show(template, this.modalConfig);
  }

  confirmDelete() {
    this.modalRef.hide();
    const that = this;
    if (this.deleteGroupName !== undefined && this.deleteGroupName !== '') {
      this.httpService.delete(this.userBusinessService.deleteGroupSummary() + this.deleteGroupName, null, function (successful, data, res) {
        if (successful && typeof data === 'boolean' && data) {
          that.hp.search();
          const toastCfg = new ToastConfig(ToastType.INFO, '', that.deleteGroupName + ' 删除成功!', 3000);
          that.toastService.toast(toastCfg);
        } else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', that.deleteGroupName + ' 删除失败!', 3000);
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
    this.groupType = null;
  }

  ngOnInit() {
  }

}
