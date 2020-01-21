import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/* components */
import {AppComponent} from './app.component';
/* modules */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* providers */
import {UserModule} from './user/user.module';
import {DasboardComponent} from './home/components/dasboard/dasboard.component';
import {AppRoutingModule} from './app-routing.modules';
import {HomeModule} from './home/home.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import { VasteDienstenComponent } from './home/components/vaste-diensten/vaste-diensten.component';

// import {AppRoutingModule} from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    VasteDienstenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    AppRoutingModule,
    UserModule,
    HomeModule
  ],
  bootstrap: [AppComponent],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true}]
})
export class AppModule {
}
