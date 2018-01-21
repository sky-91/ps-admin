import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';

const URL = '/importantPerson/upload';

@Component({
  selector: 'app-important-person-upload',
  templateUrl: './important-person-upload.component.html',
  styleUrls: ['./important-person-upload.component.scss']
})
export class ImportantPersonUploadComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('重点人员底库导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: URL
  });

  ngOnInit() {
  }

}
