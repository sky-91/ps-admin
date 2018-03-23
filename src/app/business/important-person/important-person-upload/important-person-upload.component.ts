import {Component, OnInit, TemplateRef} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileItem, FileUploader, ParsedResponseHeaders} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-important-person-upload',
  templateUrl: './important-person-upload.component.html',
  styleUrls: ['./important-person-upload.component.scss']
})
export class ImportantPersonUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadImportantPerson();

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
    this.appService.titleEventEmitter.emit('重点人员底库导入');
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
