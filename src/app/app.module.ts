import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {AppRoutingModule} from './app-routing.modules';
import {HomeModule} from './home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { OverzichtExporterenComponent } from './home/components/overzicht-exporteren/overzicht-exporteren.component';
import {MatDatepickerModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OverzichtExporterenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    AppRoutingModule,
    HomeModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}]
})
export class AppModule {
}
