import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';

const URL = '/group/record/upload';

@Component({
  selector: 'app-group-record-upload',
  templateUrl: './group-record-upload.component.html',
  styleUrls: ['./group-record-upload.component.scss']
})
export class GroupRecordUploadComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('群体活动记录导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: URL
  });

  ngOnInit() {
  }

}
