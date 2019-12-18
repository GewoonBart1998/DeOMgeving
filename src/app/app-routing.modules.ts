import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import {ManageExperimentComponent} from './manage-experiment/manage-experiment.component';

const appRoutes: Routes =  [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: UserLoginComponent},
    {path: 'register', component: UserRegisterComponent },
    {path: 'reset-password', component: ChangePasswordComponent },
    {path: 'home', component: HomeComponent},
    {path: 'manage-experiment', component: ManageExperimentComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
