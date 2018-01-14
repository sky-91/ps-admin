import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AppService} from './app.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {ToastService} from './shared/toast/toast.service';
import {ToastBoxComponent} from './shared/toast/toast-box.component';
import {ToastComponent} from './shared/toast/toast.component';

import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

import {SpinComponent} from './shared/spin/spin.component';
import {SpinService} from './shared/spin/spin.service';
import {HttpService} from './shared/http/http.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SpinComponent,
    ToastBoxComponent,
    ToastComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    AppService,
    HttpService,
    SelectivePreloadingStrategy,
    SpinService,
    ToastService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
