import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImportantPersonComponent} from './important-person.component';
import {ImportantPersonRoutingModule} from './important-person-routing.module';
import {ImportantPersonUploadComponent} from './important-person-upload/important-person-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {IPRecordUploadComponent} from './i-p-record-upload/i-p-record-upload.component';
import {ImportantPersonListComponent} from './important-person-list/important-person-list.component';
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IPRecordListComponent} from './i-p-record-list/i-p-record-list.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {DatepickerI18nModule} from '../../shared/datepickerI18n/datepickerI18n.module';
import {ImportantPersonDetailComponent} from './important-person-detail/important-person-detail.component';
import {ImportantPersonEditComponent} from './important-person-edit/important-person-edit.component';
import {IPRecordDetailComponent} from './i-p-record-detail/i-p-record-detail.component';
import {IPRecordEditComponent} from './i-p-record-edit/i-p-record-edit.component';
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
    ImportantPersonRoutingModule
  ],
  declarations: [
    ImportantPersonComponent,
    ImportantPersonUploadComponent,
    IPRecordUploadComponent,
    ImportantPersonListComponent,
    IPRecordListComponent,
    ImportantPersonDetailComponent,
    ImportantPersonEditComponent,
    IPRecordDetailComponent,
    IPRecordEditComponent
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    UserBusinessService
  ]
})
export class ImportantPersonModule {
}
