import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from './experiment';
import {ManageExperimentComponent} from '../manage-experiment/manage-experiment.component';
import {ExperimentDetailsService} from '../../experimentDetails.service';
import {ExperimentDetails} from '../manage-experiment/experimentDetails';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: Experiment;
  @Input() experiment_details: ExperimentDetails
  @Input() manageExperimentComponent: ManageExperimentComponent;


  constructor() {
  }

  ngOnInit() {
  }

  public setExperiment(experiment: Experiment) {
    this.experiment = experiment;
  }

  // public getBeschrijving() {
  //   this.experimentDetailsService.getByExperimentId(this.experiment.experimentId);
  // }

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
