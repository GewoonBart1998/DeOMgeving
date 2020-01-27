import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.modules';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule {
}
