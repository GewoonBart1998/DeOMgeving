import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DasboardComponent} from './components/dasboard/dasboard.component';
import {ManageExperimentComponent} from './components/manage-experiment/manage-experiment.component';
import {MatInputComponent} from './components/mat-input/mat-input.component';
import {MatTextareaComponent} from './components/mat-textarea/mat-textarea.component';
import {ExperimentCardComponent} from './components/experiment-card/experiment-card.component';
import {MatSelectComponent} from './components/mat-select/mat-select.component';
import {HomeComponent} from './page/home.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserManagementComponent} from './components/user-management/user-management.component';
import {UserListComponent} from './components/user-management/user/user-list/user-list.component';
import {UserComponent} from './components/user-management/user/user.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    DasboardComponent,
    HomeComponent,
    ExperimentCardComponent,
    ManageExperimentComponent,
    MatInputComponent,
    MatSelectComponent,
    MatTextareaComponent,
    HomeComponent,
    UserManagementComponent,
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [SharedModule, FormsModule, DasboardComponent,
    HomeComponent,
    ExperimentCardComponent,
    ManageExperimentComponent,
    MatInputComponent,
    MatSelectComponent,
    MatTextareaComponent,
    HomeComponent]
})
export class HomeModule {
}
