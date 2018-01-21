import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group.component';
import {GroupSummaryUploadComponent} from './group-summary-upload/group-summary-upload.component';
import {GroupRecordUploadComponent} from './group-record-upload/group-record-upload.component';
import {GroupSummaryListComponent} from './group-summary-list/group-summary-list.component';
import {GroupRecordListComponent} from './group-record-list/group-record-list.component';

/**
 * 群体路由
 */
const groupRoutes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: 'group-summary-upload',
        component: GroupSummaryUploadComponent
      },
      {
        path: 'group-summary-list',
        component: GroupSummaryListComponent
      },
      {
        path: 'group-record-upload',
        component: GroupRecordUploadComponent
      },
      {
        path: 'group-record-list',
        component: GroupRecordListComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(groupRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GroupRoutingModule {
}
