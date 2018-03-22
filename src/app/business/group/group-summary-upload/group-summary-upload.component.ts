import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';

@Component({
  selector: 'app-group-summary-upload',
  templateUrl: './group-summary-upload.component.html',
  styleUrls: ['./group-summary-upload.component.scss']
})
export class GroupSummaryUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadGroupSummary();

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('群体汇总信息导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  ngOnInit() {
  }

}
