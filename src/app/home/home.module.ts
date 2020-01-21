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
import {UpdateHistoryComponent} from './components/manage-experiment/update-history/update-history.component';
import {UpdateMessageComponent} from './components/manage-experiment/update-history/update-message/update-message.component';


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
    UpdateHistoryComponent,
    UpdateMessageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
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
