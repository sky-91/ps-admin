import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
// 第三方
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {ImageCropperModule} from 'ng2-img-cropper';
import {SelectModule} from 'angular2-select';
import {Select2Module} from 'ng2-select2';
import {FileUploadModule} from 'ng2-file-upload';
import {DpDatePickerModule} from 'ng2-date-picker';
import {AgGridModule} from 'ag-grid-angular/main';
// 自定义
import {CommonTplModule} from '../../shared/common-tpl/common-tpl.module'; // 公共模版
import {CustomScrollbarModule} from '../../shared/custom-scrollbar/custom-scrollbar.module'; // 滚动条
import {PaginationModule} from '../../shared/pagination/pagination.module'; // 分页
import {DatepickerI18nModule} from '../../shared/datepickerI18n/datepickerI18n.module'; // 日期i18n
import {ImgCropperSelectModule} from '../../shared/img-cropper-select/img-cropper-select.module'; // 图片裁剪模块
import {ImgSelectModule} from '../../shared/img-select/img-select.module'; // 图片选择
import {ModalModule} from '../../shared/modal/modal.module'; // 模态框
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module'; // 模态框
// 路由
import {DemoRoutingModule} from './demo-routing.module';


import {DemoComponent} from './demo.component';
import {ToastDemoComponent} from './toast-demo.component';
import {ModalDemoComponent} from './modal-demo.component';
import {ImgCropperDemoComponent} from './img-cropper-demo.component';
import {SelectDemoComponent} from './select-demo.component';
import {PaginationDemoComponent} from './pagination-demo.component';
import {HttpPaginationDemoComponent} from './http-pagination-demo.component';
import {TimelineDemoComponent} from './timeline-demo.component';
import {DatepickerDemoComponent} from './datepicker-demo.component';
import {FileUploadDemoComponent} from './file-upload-demo.component';
import {NgBootstrapDemoComponent} from './ng-bootstrap-demo.component';
import {BootstrapDemoComponent} from './bootstrap-demo.component';
import {AgGridDemoComponent} from './ag-grid-demo.component';
import {SimpleDataTableDemoComponent} from './simple-data-table-demo.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    NgxChartsModule,
    MultiselectDropdownModule,
    ImageCropperModule,
    SelectModule,
    Select2Module,
    FileUploadModule,
    DemoRoutingModule,
    DpDatePickerModule,
    CommonTplModule,
    CustomScrollbarModule,
    PaginationModule,
    DatepickerI18nModule,
    ImgCropperSelectModule,
    ImgSelectModule,
    ModalModule,
    AgGridModule.withComponents([]),
    SimpleDataTableModule
  ],
  declarations: [
    DemoComponent,
    ToastDemoComponent,
    ModalDemoComponent,
    ImgCropperDemoComponent,
    SelectDemoComponent,
    PaginationDemoComponent,
    HttpPaginationDemoComponent,
    TimelineDemoComponent,
    DatepickerDemoComponent,
    FileUploadDemoComponent,
    NgBootstrapDemoComponent,
    BootstrapDemoComponent,
    AgGridDemoComponent,
    SimpleDataTableDemoComponent
  ],
  exports: [],
  providers: []
})
export class DemoModule {
}
