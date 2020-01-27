import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from './experiment';
import {ExperimentDetailsService} from '../../experimentDetails.service';
import {ManageExperimentComponent} from '../manage-experiment/manage-experiment.component';
import {ExperimentDetails} from '../manage-experiment/experimentDetails';
import {ExperimentService} from '../../service/experiment.service';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: Experiment;
  @Input() manageExperimentComponent: ManageExperimentComponent;
  experimentService: ExperimentService;
  private experimentDetails: ExperimentDetails;
  private experimentId;
  private experimentDetailsService: ExperimentDetailsService;



  constructor() {
  }

  ngOnInit() {
  }

  public setExperiment(experiment: Experiment) {
    this.experiment = experiment;
  }

  public getBeschrijving() {
    return this.manageExperimentComponent.getBeschrijving();
  }

  getStatusKleur() {
    switch (this.experiment.color) {
      case "Rood":
        return "red";
        break;

      case "Groen":
        return "green";
        break;

      case "Oranje":
        return "orange";
        break;
    }
  }

  getExperimentLocalDate() {
    return this.formatDate(new Date(this.experiment.wijziging_datum + " UTC"));
  }

  formatDate(date) {
    return [date.getDate(), this.addLeadingZero(date.getMonth() + 1), date.getFullYear()].join('-') + ' ' +
      [date.getHours(), this.addLeadingZero(date.getMinutes()) ].join(':');
  }

  private addLeadingZero(number: number) {
    return String(number).padStart(2, '0')
  }

}
