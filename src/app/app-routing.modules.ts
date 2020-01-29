import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/page/home.component';
import {ManageExperimentComponent} from './home/components/manage-experiment/manage-experiment.component';
import {UserRegisterComponent} from './user/page/user-register/user-register.component';
import {UserLoginComponent} from './user/page/user-login/user-login.component';
import {DasboardComponent} from './home/components/dasboard/dasboard.component';
import {VasteDienstenComponent} from './home/components/vaste-diensten/vaste-diensten.component';
import {AuthGuard} from './auth.guard';
import {AdminGuard} from './admin.guard';
import {MedewerkerGuard} from './medewerker.guard';
import {UserManagementComponent} from './home/components/user-management/user-management.component';
import {OverzichtExporterenComponent} from './home/components/overzicht-exporteren/overzicht-exporteren.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: UserRegisterComponent},
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
          {path: 'experiment', component: ManageExperimentComponent, canActivate: [MedewerkerGuard]},
          {path: 'experiment/:id', component: ManageExperimentComponent},
          {path: '', component: DasboardComponent},
          {path: 'user', component: UserManagementComponent, canActivate: [AdminGuard]},
          {path: 'dienst', component: VasteDienstenComponent},
          {path: 'export', component: OverzichtExporterenComponent},

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
