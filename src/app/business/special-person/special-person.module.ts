import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpecialPersonRoutingModule} from './special-person-routing.module';
import {SpecialPersonUploadComponent} from './special-person-upload/special-person-upload.component';
import {SpecialPersonComponent} from './special-person.component';
import {FileUploadModule} from 'ng2-file-upload';
import {SpecialPersonListComponent} from './special-person-list/special-person-list.component';
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module'; // 模态框


@NgModule({
  imports: [
    CommonModule,
    FileUploadModule,
    SimpleDataTableModule,
    SpecialPersonRoutingModule
  ],
  declarations: [SpecialPersonUploadComponent, SpecialPersonComponent, SpecialPersonListComponent]
})
export class SpecialPersonModule {
}
