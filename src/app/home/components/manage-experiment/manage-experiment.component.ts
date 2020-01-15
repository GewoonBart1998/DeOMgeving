import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExperimentService} from '../../experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {UserService} from '../../../user/shared/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExperimentDetails} from './experimentDetails';
import {MatFormField, MatSelect, MatSnackBar} from '@angular/material';
import {User} from '../../../user/shared/user';

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.css']
})

//TODO: split this into two components (no time)
export class ManageExperimentComponent implements OnInit {

  experimentForm: FormGroup;
  experimentDetailsForm: FormGroup;
  private experiment: Experiment;
  private experimentDetails: ExperimentDetails;

  private leaders: Array<string> = [];

  private isEditingExperimen: boolean = false;
  private fieldsEditable = !this.isEditingExperimen;

  constructor(
    private experimentService: ExperimentService,
    private userService: UserService,
    private snackbar: MatSnackBar
  ) {

  }

  ngOnInit() {
    this.experiment = new Experiment();
    this.experimentDetails = new ExperimentDetails();
    this.buildFormExperimentDetails();
    this.buildFormExperiment();

    if (this.isEditingExperimen) {
      this.getExperiment();
      this.getExperimentDetails();
    } else {
      this.buildFormExperiment();
      this.buildFormExperimentDetails();
    }

    this.fillLeaders();
    this.updateAllInputs();
  }


  private fillLeaders() {
    this.userService.getUsersByRole("MEDEWERKER").subscribe(users=> {
        for(let leader of users) {
          this.leaders.push(leader.name);
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

  private getExperiment() {
    //todo: CORRECT EXPERIMENT ID
    this.experimentService.getById(1).subscribe(response => {
      this.experiment = response;
      this.buildFormExperiment();
      this.buildFormExperimentDetails();
      this.updateAllInputs();
    });
  }


  private getExperimentDetails() {
    this.updateAllInputs();
  }

  submitForm() {
    if (this.isEditingExperimen) {
      //todo: CORRECT EXPERIMENT ID
      this.experimentService.update(1, this.experiment);
    } else {
      this.experimentService.create(this.experiment);
    }
  }

  private buildFormExperiment() {
    this.experimentForm = new FormGroup({
        experiment_naam: new FormControl(this.experiment.experiment_naam),
        experiment_leider_primair: new FormControl(this.experiment.experiment_leider_primair),
        experiment_leider_secundair: new FormControl(this.experiment.experiment_leider_secundair),
        fase: new FormControl(this.experiment.fase),
        color: new FormControl(this.experiment.color),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }
  private buildFormExperimentDetails() {
    this.experimentDetailsForm = new FormGroup({
      beschrijving: new FormControl(this.experimentDetails.beschrijving),
      netwerk: new FormControl(this.experimentDetails.netwerk),
      status: new FormControl(this.experimentDetails.status),
      kosten_inovatie: new FormControl(this.experimentDetails.kosten_inovatie),
      kosten_anders: new FormControl(this.experimentDetails.kosten_anders),
      doorlooptijd: new FormControl(this.experimentDetails.doorlooptijd),
      voortgang: new FormControl(this.experimentDetails.voortgang),
      archief_type: new FormControl(this.experimentDetails.archief_type),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  editExperiment() {
    this.fieldsEditable = !this.fieldsEditable;
    this.updateAllInputs();
  }

  updateAllInputs() {
    this.disableOrEnableAllInputs(!this.fieldsEditable)
  }

  disableOrEnableAllInputs(disable) {
    for(let input of Object.keys(this.experimentForm.controls)) {
      if(disable){
        this.experimentForm.get(input).disable();
        console.log("DISABLE " + input);
      } else {
        this.experimentForm.get(input).enable();
      }
    }

    for(let input of Object.keys(this.experimentDetailsForm.controls)) {
      if(disable){
        this.experimentDetailsForm.get(input).disable();
      } else {
        this.experimentDetailsForm.get(input).enable();
      }
    }
  }
  disablAllInputs() {
    this.disableOrEnableAllInputs(true);
  }
  enableAllInputs() {
    this.disableOrEnableAllInputs(false);
  }
}
