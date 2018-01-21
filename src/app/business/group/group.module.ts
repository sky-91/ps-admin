import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GroupComponent} from './group.component';
import {GroupRoutingModule} from './group-routing.module';
import {GroupSummaryUploadComponent} from './group-summary-upload/group-summary-upload.component';
import {GroupRecordUploadComponent} from './group-record-upload/group-record-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {GroupSummaryListComponent} from './group-summary-list/group-summary-list.component';
import {GroupRecordListComponent} from './group-record-list/group-record-list.component';
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module';


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    SimpleDataTableModule,
    GroupRoutingModule
  ],
  declarations: [
    GroupComponent,
    GroupSummaryUploadComponent,
    GroupRecordUploadComponent,
    GroupSummaryListComponent,
    GroupRecordListComponent
  ]
})
export class GroupModule {
}
