import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';

@Component({
  selector: 'app-i-p-record-upload',
  templateUrl: './i-p-record-upload.component.html',
  styleUrls: ['./i-p-record-upload.component.scss']
})
export class IPRecordUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadPersonRecord();

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('重点人员活动轨迹导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  ngOnInit() {
  }

}
