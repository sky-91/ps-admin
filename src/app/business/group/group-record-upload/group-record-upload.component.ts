import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

const URL = '/group/record/upload';

@Component({
  selector: 'app-group-record-upload',
  templateUrl: './group-record-upload.component.html',
  styleUrls: ['./group-record-upload.component.scss']
})
export class GroupRecordUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadGroupRecord();

  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    class: 'modal-sm',
    ignoreBackdropClick: true,
    keyboard: false
  };
  result: any;
  success: boolean;
  temp: TemplateRef<any>;

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService,
              private modalService: BsModalService) {
    this.appService.titleEventEmitter.emit('群体活动记录导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  fileUpload(template: TemplateRef<any>) {
    this.uploader.uploadAll();
    this.temp = template;
  }

  fileCancel() {
    this.uploader.cancelAll();
  }

  fileRemove() {
    this.uploader.clearQueue();
  }

  successItem(item: FileItem, response: any, status: number, headers: ParsedResponseHeaders): any {
    this.success = false;
    if (status === 200 && response !== '') {
      this.success = true;
      this.result = JSON.parse(response);
    } else {
      console.log(response + '----' + status);
    }
    this.modalRef = this.modalService.show(this.temp, this.modalConfig);
  }

  ngOnInit() {
    this.uploader.onSuccessItem = this.successItem.bind(this);
  }

}
