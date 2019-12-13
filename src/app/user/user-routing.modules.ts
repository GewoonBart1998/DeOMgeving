import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserLoginComponent} from './page/user-login/user-login.component';
import {UserRegisterComponent} from './page/user-register/user-register.component';

const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
