import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DasboardComponent} from './dasboard/dasboard.component';
import {ChangePasswordComponent} from './user/page/change-password/change-password.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import( './user/user.module' )},
  {path: 'register', loadChildren: () => import( './user/user.module' )},
  {path: 'reset-password', component: ChangePasswordComponent},
  {path: 'dashboard', component: DasboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
