import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserLoginComponent} from './page/user-login/user-login.component';
import {UserRegisterComponent} from './page/user-register/user-register.component';
import {ChangePasswordComponent} from './page/change-password/change-password.component';
import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from './user-routing.modules';
import {ForgotPasswordComponent} from './page/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    UserRoutingModule,
  ],
  exports: [UserRoutingModule]
})
export class UserModule {
}
