import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';

const URL = '/group/record/upload';

@Component({
  selector: 'app-group-record-upload',
  templateUrl: './group-record-upload.component.html',
  styleUrls: ['./group-record-upload.component.scss']
})
export class GroupRecordUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadGroupRecord();

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('群体活动记录导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  ngOnInit() {
  }

}
