import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DasboardComponent} from './dasboard/dasboard.component';
import {ChangePasswordComponent} from './user/page/change-password/change-password.component';
import {UserLoginComponent} from './user/page/user-login/user-login.component';
import {UserRegisterComponent} from './user/page/user-register/user-register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'login', component: UserRegisterComponent},
  {path: 'reset-password', component: ChangePasswordComponent},
  {path: 'dashboard', component: DasboardComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
