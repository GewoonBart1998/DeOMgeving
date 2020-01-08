import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExperimentService} from '../../experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {MatInputComponent} from '../mat-input/mat-input.component';
import {MatSelectComponent} from '../mat-select/mat-select.component';
import {MatTextareaComponent} from '../mat-textarea/mat-textarea.component';
import {MatSnackBar} from '@angular/material';
import {UserService} from '../../../user/shared/user.service';
import {User} from '../../../user/shared/user';

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.css']
})
export class ManageExperimentComponent implements OnInit {
  @ViewChild('name', {static: false}) name: MatInputComponent;
  @ViewChild('leader1', {static: false}) leader1: MatSelectComponent;
  @ViewChild('leader2', {static: false}) leader2: MatSelectComponent;
  @ViewChild('fase', {static: false}) fase: MatSelectComponent;
  @ViewChild('description', {static: false}) description: MatTextareaComponent;
  @ViewChild('network', {static: false}) network: MatTextareaComponent;
  @ViewChild('status', {static: false}) status: MatTextareaComponent;
  @ViewChild('statusColor', {static: false}) statusColor: MatSelectComponent;
  @ViewChild('kostenInnovatie', {static: false}) kostenInnovatie: MatTextareaComponent;
  @ViewChild('kostenAnders', {static: false}) kostenAnders: MatTextareaComponent;
  @ViewChild('doorlooptijd', {static: false}) doorlooptijd: MatTextareaComponent;
  @ViewChild('voortgang', {static: false}) voortgang: MatTextareaComponent;
  @ViewChild('archrived', {static: false}) archrived: MatSelectComponent;

  constructor(private experimentService: ExperimentService, private userService: UserService, private snackbar: MatSnackBar) {

  }

  ngOnInit() {
    this.userService.getUsersByRole("MEDEWERKER").subscribe(users=> {
        this.leader1.values = [];
        this.leader2.values = [];
        for (let user of users) {
          this.leader1.values.push({value: user.name, text: user.name});
          this.leader2.values.push({value: user.name, text: user.name});
        }

      },
      error => {
        this.snackbar.open('Kon experiment leiders niet inladen', '', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
  }

  addExperiment() {
    const newExperiment = new Experiment();
    newExperiment.experiment_naam = this.name.inputValue;
    newExperiment.fase = this.fase.inputValue;
    newExperiment.color = this.statusColor.inputValue;
    newExperiment.experiment_leider_primair = this.leader1.inputValue;
    newExperiment.experiment_leider_secundair = this.leader2.inputValue;

    console.log(newExperiment);

    this.experimentService.create(newExperiment).subscribe(res => {
        console.log(res);
      },
      error => {
        this.snackbar.open('Kon experimenten niet toevoegen', '', {
          duration: 2000,
          // here specify the position
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });

  }
}
