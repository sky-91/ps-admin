import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    loadChildren: 'app/login/login.module#LoginModule'
  },
  {
    path: 'app',
    loadChildren: 'app/main/main.module#MainModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
