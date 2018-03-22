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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DpDatePickerModule} from 'ng2-date-picker';
import {DatepickerI18nModule} from '../../shared/datepickerI18n/datepickerI18n.module';
import {GroupRecordDetailComponent} from './group-record-detail/group-record-detail.component';
import {GroupRecordEditComponent} from './group-record-edit/group-record-edit.component';
import {GroupSummaryEditComponent} from './group-summary-edit/group-summary-edit.component';
import {GroupSummaryDetailComponent} from './group-summary-detail/group-summary-detail.component';
import {BsModalService, ComponentLoaderFactory, ModalModule, PositioningService} from 'ngx-bootstrap';
import {UserBusinessService} from '../../business-service/user/user-business.service';


@NgModule({
  imports: [
    CommonModule,
    DatepickerI18nModule,
    DpDatePickerModule,
    FileUploadModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    SimpleDataTableModule,
    GroupRoutingModule
  ],
  declarations: [
    GroupComponent,
    GroupSummaryUploadComponent,
    GroupRecordUploadComponent,
    GroupSummaryListComponent,
    GroupRecordListComponent,
    GroupRecordDetailComponent,
    GroupRecordEditComponent,
    GroupSummaryEditComponent,
    GroupSummaryDetailComponent
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    UserBusinessService
  ]
})
export class GroupModule {
}
