import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {ImageCropperComponent} from 'ng2-img-cropper';

/**
 * 图片裁剪选择指令
 */
@Directive({
  selector: '[app-img-cropper-select]',
})
export class ImgCropperSelectDirective {

  @Input() public cropper: ImageCropperComponent;

  constructor(private elementRef: ElementRef) {
  }

  @HostListener('change')
  public onChange(): any {
    const files = this.elementRef.nativeElement.files;
    if (files && files.length > 0) {
      const image: any = new Image();
      const file: File = files[0];
      const myReader: FileReader = new FileReader();
      const that = this;
      myReader.onloadend = function (loadEvent: any) {
        image.src = loadEvent.target.result;
        that.cropper.setImage(image);
      };
      myReader.readAsDataURL(file);
    }
  }
}
