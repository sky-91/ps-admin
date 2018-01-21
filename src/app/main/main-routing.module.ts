import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main.component';
import {SpecialPersonModule} from '../business/special-person/special-person.module';
import {ImportantPersonModule} from '../business/important-person/important-person.module';

/**
 * 主体路由
 */
const mainRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: 'special-person', loadChildren: 'app/business/special-person/special-person.module#SpecialPersonModule'},
      {path: 'important-person', loadChildren: 'app/business/important-person/important-person.module#ImportantPersonModule'},
      {path: 'group', loadChildren: 'app/business/group/group.module#GroupModule'},
      {path: 'home', loadChildren: 'app/business/home/home.module#HomeModule'},
      {path: 'demo', loadChildren: 'app/business/demo/demo.module#DemoModule'},
      {path: 'user', loadChildren: 'app/business/user/user.module#UserModule'},
      {path: 'role', loadChildren: 'app/business/role/role.module#RoleModule'}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {
}
