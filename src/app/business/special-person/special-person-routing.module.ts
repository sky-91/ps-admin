import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SpecialPersonComponent} from './special-person.component';
import {SpecialPersonUploadComponent} from './special-person-upload/special-person-upload.component';
import {SpecialPersonListComponent} from './special-person-list/special-person-list.component';
import {SpecialPersonEditComponent} from './special-person-edit/special-person-edit.component';
import {SpecialPersonDetailComponent} from './special-person-detail/special-person-detail.component';

/**
 * 疆藏人员路由
 */
const specialPersonRoutes: Routes = [
  {
    path: '',
    component: SpecialPersonComponent,
    children: [
      {
        path: 'special-person-upload',
        component: SpecialPersonUploadComponent
      },
      {
        path: 'special-person-list',
        component: SpecialPersonListComponent
      },
      {
        path: 'special-person-edit/:idCard',
        component: SpecialPersonEditComponent
      },
      {
        path: 'special-person-new',
        component: SpecialPersonEditComponent
      },
      {
        path: 'special-person-detail/:idCard',
        component: SpecialPersonDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(specialPersonRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SpecialPersonRoutingModule {
}
