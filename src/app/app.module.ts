import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* components */
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


/* modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material/';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { DasboardComponent } from './dasboard/dasboard.component';

/* providers */
import { UserService } from 'shared/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DasboardComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
