import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/page/home.component';
import {ManageExperimentComponent} from './home/components/manage-experiment/manage-experiment.component';
import {ForgotPasswordComponent} from './user/page/forgot-password/forgot-password.component';
import {UserRegisterComponent} from './user/page/user-register/user-register.component';
import {UserLoginComponent} from './user/page/user-login/user-login.component';
import {ChangePasswordComponent} from './user/page/change-password/change-password.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'user/reset-password/:token', component: ChangePasswordComponent },
  {path: 'home', component: HomeComponent},
  {path: 'manage-experiment', component: ManageExperimentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
