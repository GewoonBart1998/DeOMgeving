import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from './experiment';
import {ExperimentDetailsService} from '../../experimentDetails.service';
import {ManageExperimentComponent} from '../manage-experiment/manage-experiment.component';
import {ExperimentDetails} from '../manage-experiment/experimentDetails';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: Experiment;
  @Input() manageExperimentComponent: ManageExperimentComponent;
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

  getBeschrijving() {
      this.experimentDetailsService.getByExperimentId(this.experimentId).subscribe(response => {
        this.experimentDetails = response;
  });
  }

  getStatusKleur() {
    switch(this.experiment.color) {
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
}
