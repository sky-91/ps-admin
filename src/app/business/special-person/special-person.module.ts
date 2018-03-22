import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpecialPersonRoutingModule} from './special-person-routing.module';
import {SpecialPersonUploadComponent} from './special-person-upload/special-person-upload.component';
import {SpecialPersonComponent} from './special-person.component';
import {FileUploadModule} from 'ng2-file-upload';
import {SpecialPersonListComponent} from './special-person-list/special-person-list.component';
import {SimpleDataTableModule} from '../../shared/simple-data-table/simple-data-table.module';
import {DatepickerI18nModule} from '../../shared/datepickerI18n/datepickerI18n.module';
import {DpDatePickerModule} from 'ng2-date-picker';
import {SpecialPersonEditComponent} from './special-person-edit/special-person-edit.component';
import {UserBusinessService} from '../../business-service/user/user-business.service';
import {BsModalService, ComponentLoaderFactory, ModalModule, PositioningService} from 'ngx-bootstrap';
import { SpecialPersonDetailComponent } from './special-person-detail/special-person-detail.component';

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
    SpecialPersonRoutingModule
  ],
  declarations: [
    SpecialPersonUploadComponent,
    SpecialPersonComponent,
    SpecialPersonListComponent,
    SpecialPersonEditComponent,
    SpecialPersonDetailComponent
  ],
  providers: [
    BsModalService,
    ComponentLoaderFactory,
    PositioningService,
    UserBusinessService
  ]
})
export class SpecialPersonModule {
}
