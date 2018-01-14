import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


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

/**
 * demo路由
 */
const demoRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'toastDemo',
        component: ToastDemoComponent
      },
      {
        path: 'modalDemo',
        component: ModalDemoComponent
      },
      {
        path: 'imgCropperDemo',
        component: ImgCropperDemoComponent
      },
      {
        path: 'selectDemo',
        component: SelectDemoComponent
      },
      {
        path: 'paginationDemo',
        component: PaginationDemoComponent
      },
      {
        path: 'httpPaginationDemo',
        component: HttpPaginationDemoComponent
      },
      {
        path: 'timelineDemo',
        component: TimelineDemoComponent
      },
      {
        path: 'datepickerDemo',
        component: DatepickerDemoComponent
      },
      {
        path: 'fileUploadDemo',
        component: FileUploadDemoComponent
      },
      {
        path: 'ngBootstrapDemo',
        component: NgBootstrapDemoComponent
      },
      {
        path: 'bootstrapDemo',
        component: BootstrapDemoComponent
      },
      {
        path: 'agGridDemo',
        component: AgGridDemoComponent
      },
      {
        path: 'simpleDataTableDemo',
        component: SimpleDataTableDemoComponent
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {
}
