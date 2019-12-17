import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
/* components */
import {AppComponent} from './app.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
/* modules */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBar
} from '@angular/material/';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.modules';
import {DasboardComponent} from './dasboard/dasboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
/* providers */
import {UserService} from 'src/app/shared/user.service';
import {HomeComponent} from './home/home.component';
import {ExperimentCardComponent} from './experiment-card/experiment-card.component';
import {ManageExperimentComponent} from './manage-experiment/manage-experiment.component';
import {MatInputComponent} from './mat-input/mat-input.component';
import {MatSelectComponent} from './mat-select/mat-select.component';
import {MatTextareaComponent} from './mat-textarea/mat-textarea.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DasboardComponent,
    HomeComponent,
    ExperimentCardComponent,
    ManageExperimentComponent,
    MatInputComponent,
    MatSelectComponent,
    MatTextareaComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatSnackBarModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
