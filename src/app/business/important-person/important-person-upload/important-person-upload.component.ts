import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';

@Component({
  selector: 'app-important-person-upload',
  templateUrl: './important-person-upload.component.html',
  styleUrls: ['./important-person-upload.component.scss']
})
export class ImportantPersonUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadImportantPerson();

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('重点人员底库导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  ngOnInit() {
  }

}
