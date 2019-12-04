import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* components */
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


/* modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material/';
import { AppRoutingModule } from './app-routing.modules';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ChangePasswordComponent,
    LoginComponent,
    DasboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
