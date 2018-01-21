import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImportantPersonComponent} from './important-person.component';
import {ImportantPersonRoutingModule} from './important-person-routing.module';
import {ImportantPersonUploadComponent} from './important-person-upload/important-person-upload.component';
import {FileUploadModule} from 'ng2-file-upload';
import {IPRecordUploadComponent} from './i-p-record-upload/i-p-record-upload.component';
import {ImportantPersonListComponent} from './important-person-list/important-person-list.component';
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module';

@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    SimpleDataTableModule,
    ImportantPersonRoutingModule
  ],
  declarations: [ImportantPersonComponent, ImportantPersonUploadComponent, IPRecordUploadComponent, ImportantPersonListComponent]
})
export class ImportantPersonModule {
}
