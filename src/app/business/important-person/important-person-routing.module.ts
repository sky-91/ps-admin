import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImportantPersonComponent} from './important-person.component';
import {ImportantPersonUploadComponent} from './important-person-upload/important-person-upload.component';
import {IPRecordUploadComponent} from './i-p-record-upload/i-p-record-upload.component';
import {ImportantPersonListComponent} from './important-person-list/important-person-list.component';

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
