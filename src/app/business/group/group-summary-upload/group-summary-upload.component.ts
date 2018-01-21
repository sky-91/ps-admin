import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';

const URL = '/group/upload';

@Component({
  selector: 'app-group-summary-upload',
  templateUrl: './group-summary-upload.component.html',
  styleUrls: ['./group-summary-upload.component.scss']
})
export class GroupSummaryUploadComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('群体汇总信息导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: URL
  });

  ngOnInit() {
  }

}
