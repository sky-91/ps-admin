import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {FileUploader} from 'ng2-file-upload';

const URL = '/person/upload';

@Component({
  selector: 'app-special-person-upload',
  templateUrl: './special-person-upload.component.html',
  styleUrls: ['./special-person-upload.component.scss']
})
export class SpecialPersonUploadComponent implements OnInit {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('疆藏人员导入');
  }

  public uploader: FileUploader = new FileUploader({
    allowedFileType: ['xls', 'xlsx'], queueLimit: 1, url: URL
  });

  ngOnInit() {
  }
}