import {Component} from '@angular/core';
import {SpinService} from './spin.service';

/**
 * 旋转组件
 */
@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent {

  // 标识
  showSpin = false;

  // 数量
  count = 0;

  constructor(private spinService: SpinService) {
    this.spinService.getSpin().forEach((showSpin: boolean) => {
      if (showSpin) {
        this.openSpin();
      } else {
        this.closeSpin();
      }
    });
  }

  /**
   * 打开
   */
  private openSpin() {
    if (!this.showSpin) {
      this.showSpin = true;
    }
    this.count++;
  }

  /**
   * 关闭
   */
  private closeSpin() {
    this.count--;
    if (this.count <= 0) {
      this.showSpin = false;
      this.count = 0;
    }

  }

}