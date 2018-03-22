import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImportantPersonComponent} from './important-person.component';
import {ImportantPersonUploadComponent} from './important-person-upload/important-person-upload.component';
import {IPRecordUploadComponent} from './i-p-record-upload/i-p-record-upload.component';
import {ImportantPersonListComponent} from './important-person-list/important-person-list.component';
import {IPRecordListComponent} from './i-p-record-list/i-p-record-list.component';
import {ImportantPersonDetailComponent} from './important-person-detail/important-person-detail.component';
import {ImportantPersonEditComponent} from './important-person-edit/important-person-edit.component';
import {IPRecordDetailComponent} from './i-p-record-detail/i-p-record-detail.component';
import {IPRecordEditComponent} from './i-p-record-edit/i-p-record-edit.component';

/**
 * 重点人员路由
 */
const importantPersonRoutes: Routes = [
  {
    path: '',
    component: ImportantPersonComponent,
    children: [
      {
        path: 'important-person-upload',
        component: ImportantPersonUploadComponent
      },
      {
        path: 'important-person-list',
        component: ImportantPersonListComponent
      },
      {
        path: 'i-p-record-upload',
        component: IPRecordUploadComponent
      },
      {
        path: 'i-p-record-list',
        component: IPRecordListComponent
      },
      {
        path: 'important-person-detail/:idCard',
        component: ImportantPersonDetailComponent
      },
      {
        path: 'important-person-edit/:idCard',
        component: ImportantPersonEditComponent
      },
      {
        path: 'important-person-new',
        component: ImportantPersonEditComponent
      },
      {
        path: 'i-p-record-detail/:pk',
        component: IPRecordDetailComponent
      },
      {
        path: 'i-p-record-edit/:pk',
        component: IPRecordEditComponent
      },
      {
        path: 'i-p-record-new',
        component: IPRecordEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(importantPersonRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImportantPersonRoutingModule {
}
