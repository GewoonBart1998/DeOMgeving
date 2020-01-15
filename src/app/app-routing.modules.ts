import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/page/home.component';
import {ManageExperimentComponent} from './home/components/manage-experiment/manage-experiment.component';
import {ForgotPasswordComponent} from './user/page/forgot-password/forgot-password.component';
import {UserRegisterComponent} from './user/page/user-register/user-register.component';
import {UserLoginComponent} from './user/page/user-login/user-login.component';
import {ChangePasswordComponent} from './user/page/change-password/change-password.component';
import {DasboardComponent} from './home/components/dasboard/dasboard.component';
import {AuthGuard} from './auth.guard';
import {UserManagementComponent} from './home/components/user-management/user-management.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'user/reset-password/:token', component: ChangePasswordComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {path: 'dashboard', component: DasboardComponent},
          {path: 'experiment', component: ManageExperimentComponent},
          {path: '', component: DasboardComponent},
          {path: 'user', component: UserManagementComponent},

        ]
      },

    ]
  },
  {path: 'manage-experiment', component: ManageExperimentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
