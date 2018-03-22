import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GroupComponent} from './group.component';
import {GroupSummaryUploadComponent} from './group-summary-upload/group-summary-upload.component';
import {GroupRecordUploadComponent} from './group-record-upload/group-record-upload.component';
import {GroupSummaryListComponent} from './group-summary-list/group-summary-list.component';
import {GroupRecordListComponent} from './group-record-list/group-record-list.component';
import {GroupSummaryDetailComponent} from './group-summary-detail/group-summary-detail.component';
import {GroupSummaryEditComponent} from './group-summary-edit/group-summary-edit.component';
import {GroupRecordDetailComponent} from './group-record-detail/group-record-detail.component';
import {GroupRecordEditComponent} from './group-record-edit/group-record-edit.component';

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
      },
      {
        path: 'group-summary-detail/:name',
        component: GroupSummaryDetailComponent
      },
      {
        path: 'group-summary-edit/:name',
        component: GroupSummaryEditComponent
      },
      {
        path: 'group-summary-new',
        component: GroupSummaryEditComponent
      },
      {
        path: 'group-record-detail/:pk',
        component: GroupRecordDetailComponent
      },
      {
        path: 'group-record-edit/:pk',
        component: GroupRecordEditComponent
      },
      {
        path: 'group-record-new',
        component: GroupRecordEditComponent
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
