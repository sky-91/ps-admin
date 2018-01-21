import {Component} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html'
})
export class RoleAddComponent {

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('角色添加');
  }
}
