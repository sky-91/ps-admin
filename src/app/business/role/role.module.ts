import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PaginationModule} from '../../shared/pagination/pagination.module';

import {RoleRoutingModule} from './role-routing.module';
import {RoleComponent} from './role.component';
import {RoleAddComponent} from './role-add.component';
import {RoleListComponent} from './role-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RoleRoutingModule,
    PaginationModule
  ],
  declarations: [
    RoleComponent,
    RoleAddComponent,
    RoleListComponent
  ],
  exports: [],
  providers: []
})
export class RoleModule {
}
