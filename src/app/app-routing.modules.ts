import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { DasboardComponent } from './dasboard/dasboard.component';

const appRoutes: Routes =  [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent },
    {path:'wachtwoord-vergeten', component: ChangePasswordComponent },
    {path:'dashboard', component: DasboardComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}