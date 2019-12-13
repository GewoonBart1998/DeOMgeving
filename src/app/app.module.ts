import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/* components */
import {AppComponent} from './app.component';
/* modules */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
/* providers */
import {UserModule} from './user/user.module';
import {DasboardComponent} from './dasboard/dasboard.component';
import {AppRoutingModule} from './app-routing.modules';

// import {AppRoutingModule} from './app-routing.modules';


@NgModule({
  declarations: [
    AppComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    UserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
