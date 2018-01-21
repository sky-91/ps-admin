import {Component} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('个人资料');
  }
}
