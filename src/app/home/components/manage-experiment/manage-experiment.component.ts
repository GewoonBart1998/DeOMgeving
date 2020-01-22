import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ExperimentService} from '../../service/experiment.service';
import {PdfService} from '../../service/pdf.service';

import {Experiment} from '../experiment-card/experiment';
import {UserService} from '../../../user/shared/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExperimentDetails} from './experimentDetails';
import {MatFormField, MatSelect, MatSnackBar} from '@angular/material';
import {User} from '../../../user/shared/user';
import {ExperimentDetailsService} from '../../experimentDetails.service';
import {ActivatedRoute, Router} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.css']
})

// TODO: split this into two components (no time)
export class ManageExperimentComponent implements OnInit {



  experimentForm: FormGroup;
  experimentDetailsForm: FormGroup;
  private experiment: Experiment;
  private experimentDetails: ExperimentDetails;

  private leaders: Array<string> = [];

  private existingExperiment = false;
  private isEditingExperiment = true;
  private experimentId;

  constructor(
    private experimentService: ExperimentService,
    private experimentDetailsService: ExperimentDetailsService,
    private userService: UserService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private pdfService: PdfService
  ) {

  }

  ngOnInit() {
    this.experimentId = this.getExperimentIdFromPath();
    this.existingExperiment = this.experimentId !== null;
    this.experiment = new Experiment();
    this.experimentDetails = new ExperimentDetails();
    this.buildFormExperimentDetails();
    this.buildFormExperiment();

    console.log(this.experimentId);

    if (this.existingExperiment) {
      this.isEditingExperiment = false;
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
    this.userService.getUsersByRole('MEDEWERKER').subscribe(users => {
        for (const leader of users) {
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
    // TODO: CORRECT EXPERIMENT ID
    this.experimentService.getById(this.experimentId).subscribe(response => {
      this.experiment = response;
      this.buildFormExperiment();
      this.buildFormExperimentDetails();
      this.updateAllInputs();
    });
  }


  private getExperimentDetails() {
    this.experimentDetailsService.getByExperimentId(this.experimentId).subscribe(response => {
      this.experimentDetails = response;
      this.buildFormExperimentDetails();
      this.updateAllInputs();
    });
  }

  generatePdf() {
    const documentDefinition = this.pdfService.getDocumentDefinition(this.experiment, this.experimentDetails);
    pdfMake.createPdf(documentDefinition).download();
  }

  submitForm() {
    if (this.existingExperiment) {
      this.experimentService.update(this.experimentId, this.experiment);
      this.experimentDetailsService.update(this.experimentId, this.experimentDetailsForm.value);
    } else {
      this.experimentService.create(this.experimentForm.value).subscribe(res => {
        const experimentDetails = this.experimentDetailsForm.value;
        // experimentDetails.netwerk = "";
        experimentDetails.experimentId = <number>res;
        this.experimentDetailsService.create(experimentDetails).subscribe(
          res1 => {
            this.snackbar.open('Experiment aangemaakt!', '', {
              duration: 2000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });

            this.router.navigate(['/home']);

          }
        );


      });
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

  pushEditButton() {
    this.experimentService.update(this.experiment.experimentId, this.experimentForm.value).subscribe(response => {
      console.log(response);
    });
    this.experimentDetailsService.update(this.experiment.experimentId, this.experimentDetailsForm.value).subscribe(response => {
      console.log(response);
    });
    this.isEditingExperiment = false;
    this.updateAllInputs();
  }

  editExperiment() {
    this.isEditingExperiment = !this.isEditingExperiment;
    this.updateAllInputs();
  }

  updateAllInputs() {
    this.disableOrEnableAllInputs(!this.isEditingExperiment);
  }

  disableOrEnableAllInputs(disable) {
    for (let input of Object.keys(this.experimentForm.controls)) {
      if (disable) {
        this.experimentForm.get(input).disable();
      } else {
        this.experimentForm.get(input).enable();
      }
    }

    for (let input of Object.keys(this.experimentDetailsForm.controls)) {
      if (disable) {
        this.experimentDetailsForm.get(input).disable();
      } else {
        this.experimentDetailsForm.get(input).enable();
      }
    }
  }

  disableAllInputs() {
    this.disableOrEnableAllInputs(true);
  }

  enableAllInputs() {
    this.disableOrEnableAllInputs(false);
  }

  private setupForm() {

    const experimentId = this.getExperimentIdFromPath();

    if (experimentId == null) {
      return;
    }

    // this.getExperiment(experimentId);
    // this.getExperimentDetails(experimentId);
  }

  private getExperimentIdFromPath() {
    const experimentId = this.route.snapshot.paramMap.get('id');

    if (experimentId == null) {
      return null;
    }

    return Number(experimentId);
  }

  //
  // private getExperiment(experimentId) {
  //   this.experimentService.getById(experimentId).subscribe(response => {
  //     this.experiment = response;
  //     this.buildFormExperiment();
  //     this.buildFormExperimentDetails();
  //   });
  // }
  //
  // private getExperimentDetails(experimentId) {
  //   this.experimentDetailsService.getByExperimentId(experimentId).subscribe(response => {
  //     this.experimentDetails = response;
  //     this.buildFormExperimentDetails();
  //   });
  // }

  deleteExperiment() {
    this.experimentDetailsService.deleteByExperimentId(this.experimentId).subscribe(res => {
      console.log('success');
    });
    this.experimentService.delete(this.experimentId).subscribe(res => {
      console.log('success');
    });

    this.snackbar.open('Experiment verwijderd!', '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
    this.router.navigate(['/home']);
  }

  private createEmptyForm() {
    this.experiment = new Experiment();
    this.experimentDetails = new ExperimentDetails();
    this.buildFormExperiment();
    this.buildFormExperimentDetails();
    this.enableAllInputs();
  }

  private delayNaviagate() {
    setTimeout(() => {

    }, 900);
  }
}
