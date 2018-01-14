import {Component} from '@angular/core';

import {AppService} from '../../app.service';


@Component({
  selector: 'app-ng-bootstrap-demo',
  templateUrl: './ng-bootstrap-demo.component.html'
})
export class NgBootstrapDemoComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };

  public isCollapsed = false;

  constructor(private appService: AppService) {
    this.appService.titleEventEmitter.emit('ng-bootstrap示例');
  }


}
