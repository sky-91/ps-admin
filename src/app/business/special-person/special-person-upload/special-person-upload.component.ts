import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';
import {UserBusinessService} from '../../../business-service/user/user-business.service';

@Component({
  selector: 'app-special-person-upload',
  templateUrl: './special-person-upload.component.html',
  styleUrls: ['./special-person-upload.component.scss']
})
export class SpecialPersonUploadComponent implements OnInit {

  URL: string = this.userBusinessService.uploadSpecialPerson();

  constructor(private appService: AppService,
              private userBusinessService: UserBusinessService) {
    this.appService.titleEventEmitter.emit('疆藏人员导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: this.URL
  });

  ngOnInit() {
  }
}
