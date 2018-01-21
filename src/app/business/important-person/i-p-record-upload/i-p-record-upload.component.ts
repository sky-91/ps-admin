import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';

const URL = '/importantPerson/record/upload';

@Component({
  selector: 'app-i-p-record-upload',
  templateUrl: './i-p-record-upload.component.html',
  styleUrls: ['./i-p-record-upload.component.scss']
})
export class IPRecordUploadComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('重点人员活动轨迹导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: URL
  });

  ngOnInit() {
  }

}
