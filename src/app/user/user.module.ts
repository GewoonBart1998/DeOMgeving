import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {UserLoginComponent} from './page/user-login/user-login.component';
import {UserRegisterComponent} from './page/user-register/user-register.component';
import {SharedModule} from '../shared/shared.module';
import {UserRoutingModule} from './user-routing.modules';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent
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
