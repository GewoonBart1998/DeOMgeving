import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {ExperimentService} from '../../service/experiment.service';
import {PdfService} from '../../service/pdf.service';
import {Experiment} from '../experiment-card/experiment';
import {UserService} from '../../../user/shared/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ExperimentDetails} from './experimentDetails';
import {ExperimentDetailsService} from '../../experimentDetails.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FileUploadService} from '../../../shared/services/file-upload.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import pdfMake from 'pdfmake/build/pdfmake';
import {SnackbarService} from '../../../shared/services/snackbar.service';
import {ConfirmActionComponent} from '../../../shared/components/confirm-action.component';
import {MatDialog} from '@angular/material/dialog';
import pdfFonts from "pdfmake/build/vfs_fonts";
import {ExperimentStatsService} from '../../service/experimentStats.service';
import {UploadedFile} from '../../../shared/services/UploadedFile';

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

  leaders: Array<string> = [];

  existingExperiment = false;
  isEditingExperiment = true;
  experimentId;

  uploadedFile = null;
  isUploading: boolean = false;

  bijlage: File = null;
  private fileBlob: Blob;
  fileUrl: SafeResourceUrl;

  constructor(
    private experimentService: ExperimentService,
    private experimentDetailsService: ExperimentDetailsService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private uploader: FileUploadService,
    private sanitizer: DomSanitizer,
    private pdfService: PdfService,
    private snackbar: SnackbarService,
    public dialog: MatDialog,
    private experimentStats: ExperimentStatsService
  ) {

  }

  ngOnInit() {
    this.experimentId = this.getExperimentIdFromPath();
    this.existingExperiment = this.experimentId !== null;
    this.experiment = new Experiment();
    this.experimentDetails = new ExperimentDetails();
    this.buildFormExperimentDetails();
    this.buildFormExperiment();


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
    this.getUploadedAttachment();
  }

  private getUploadedAttachment() {
    if (this.existingExperiment) {
      var self = this;
      this.uploader.getUploadedFile(this.experimentId, function(file, fileBlob) {

        self.uploadedFile = file;
        self.fileUrl = self.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(fileBlob));
      });
    }
  }

  //TODO: clean up this method in the future. I am making this the day before launch so....
  private fillLeaders() {
    this.userService.getUsersByRole('MEDEWERKER').subscribe(users => {
        for (const leader of users) {
          this.leaders.push(leader.name);
        }
      },
      error => {
        this.snackbar.showMessage('Kon experiment leiders niet inladen');
      });

    this.userService.getUsersByRole('ADMIN').subscribe(users => {
        for (const leader of users) {
          this.leaders.push(leader.name);
        }
      });
  }

  private getExperiment() {
    this.experimentService.getById(this.experimentId).subscribe(response => {
      this.experiment = response;
      this.buildFormExperiment();
      this.buildFormExperimentDetails();
      this.updateAllInputs();
    });
  }


   getExperimentDetails() {
    this.experimentDetailsService.getByExperimentId(this.experimentId).subscribe(response => {
      this.experimentDetails = response;
      this.buildFormExperimentDetails();
      this.updateAllInputs();
    });
  }

  generatePdf() {
    const self = this;
    var attachmentName = (this.uploadedFile) ? this.uploadedFile.fileName : null;
    const documentDefinition = this.pdfService.getDocumentDefinition(this.experiment, this.experimentDetails, attachmentName,
      function(data) {
        pdfMake.vfs = pdfFonts.pdfMake.vfs;
        var pdf = pdfMake.createPdf(data);
        pdf.download(self.experiment.experiment_naam);
    });
  }

  //todo: make this a bit more readable
  submitForm() {
    if (this.existingExperiment) {
      this.experimentService.update(this.experimentId, this.experiment);
      this.experimentDetailsService.update(this.experimentId, this.experimentDetailsForm.value);
    } else {
      this.experimentService.create(this.experimentForm.value).subscribe(res => {
        const experimentDetails = this.experimentDetailsForm.value;
        experimentDetails.experimentId = <number> res;
        this.manageUpload(experimentDetails.experimentId);

        this.experimentDetailsService.create(experimentDetails).subscribe(
          res1 => {
            this.snackbar.showMessage('Experiment aangemaakt');
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
        beschrijving: new FormControl(this.experiment.beschrijving),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  private buildFormExperimentDetails() {
    this.experimentDetailsForm = new FormGroup({

        netwerk: new FormControl(this.experimentDetails.netwerk),
        status: new FormControl(this.experimentDetails.status),
        kosten_innovatie: new FormControl(this.experimentDetails.kosten_innovatie),
        kosten_anders: new FormControl(this.experimentDetails.kosten_anders),
        doorlooptijd: new FormControl(this.experimentDetails.doorlooptijd),
        overige_opmerkingen: new FormControl(this.experimentDetails.overige_opmerkingen),
        archief_type: new FormControl(this.experimentDetails.archief_type),
      }, [Validators.required, Validators.maxLength(255)]
    );
  }

  pushEditButton() {

    let dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {title: 'Wijzigingen opslaan?', message: 'huidige aanpassingen worden opgeslagen', confirmButtonText: 'Opslaan'},
      width: '750px',
      position: {top: '5%'}
    });


    dialogRef.afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.updateExperimentModifications();
      }

    });
  }

  manageUpload(experimentId: number) {
    if (this.bijlage) {
      this.isUploading = true;
      var self = this;
      this.uploader.handleFileUpload(experimentId, this.bijlage, function(data) {
        self.isUploading = false;
        self.getUploadedAttachment();

      });
    }
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

  //todo: remove this if it is not used
  disableAllInputs() {
    this.disableOrEnableAllInputs(true);
  }

  enableAllInputs() {
    this.disableOrEnableAllInputs(false);
  }

  //todo: remove this if it is not used
  private setupForm() {

    const experimentId = this.getExperimentIdFromPath();

    if (experimentId == null) {
      return;
    }
  }

  private getExperimentIdFromPath() {
    const experimentId = this.route.snapshot.paramMap.get('id');

    if (experimentId == null) {
      return null;
    }

    return Number(experimentId);
  }


  onDeleteExperimentButtonClick() {
    let dialogRef = this.dialog.open(ConfirmActionComponent, {
      data: {title: 'Experiment verwijderen?', message: 'Alle wijzigingen gaan veloren', confirmButtonText: 'Verwijderen'},
      width: '750px',
      position: {top: '5%'}
    });


    dialogRef.afterClosed().subscribe(isConfirmed => {
      if (isConfirmed) {
        this.deleteExperiment();
      }

    });
  }

  deleteExperiment() {
    this.experimentDetailsService.deleteByExperimentId(this.experimentId).subscribe(res => {
    });
    this.experimentService.delete(this.experimentId).subscribe(res => {
    });

    this.snackbar.showMessage('Experiment verwijderd');
    this.router.navigate(['/home']);
  }

  //todo: remove this if it is not used
  private createEmptyForm() {
    this.experiment = new Experiment();
    this.experimentDetails = new ExperimentDetails();
    this.buildFormExperiment();
    this.buildFormExperimentDetails();
    this.enableAllInputs();
  }

  //todo: remove this if it is not used
  private delayNaviagate() {
    setTimeout(() => {

    }, 900);
  }

  handleFileInput($event: any) {
    const files = $event.target.files;
    this.uploadedFile = new UploadedFile();
    this.uploadedFile.fileName = '...';
    this.bijlage = files.item(0);
    this.snackbar.showMessage("Bijlage geupload. Sla de wijzigingen op om de bijlage toe te voegen.", 4000);
  }

  private updateExperimentModifications() {
    this.updateExperiment();
    this.updateExperimentDetails();
    this.manageUpload(this.experiment.experimentId);
    this.isEditingExperiment = false;
    this.updateAllInputs();
  }

  private updateExperiment() {
    this.experimentService.update(this.experiment.experimentId, this.experimentForm.value).subscribe(response => {
    });
  }

  private updateExperimentDetails() {
    this.experimentDetailsService.update(this.experiment.experimentId, this.experimentDetailsForm.value).subscribe(response => {
    });
  }

  isFormValid() {
    return this.experimentForm.valid;
  }

  isHalfWidth() {
    return !this.isEditingExperiment;
  }
}
