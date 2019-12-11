import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* components */
import { AppComponent } from './app.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


/* modules */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material/';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { DasboardComponent } from './dasboard/dasboard.component';
import { MatCardModule } from '@angular/material/card';

/* providers */
import { UserService } from 'src/app/shared/user.service';
import { HomeComponent } from './home/home.component';
import { ExperimentCardComponent } from './experiment-card/experiment-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ChangePasswordComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DasboardComponent,
    HomeComponent,
    ExperimentCardComponent

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
    MatCardModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
