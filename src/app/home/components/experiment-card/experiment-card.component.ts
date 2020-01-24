import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from './experiment';
import {ExperimentDetailsService} from '../../experimentDetails.service';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: Experiment;
  @Input() experimentDetailsService: ExperimentDetailsService

  constructor() {
  }

  ngOnInit() {
  }

  public setExperiment(experiment: Experiment) {
    this.experiment = experiment;
  }
  getBeschrijving() {
    return this.experimentDetailsService.getByExperimentId(this.experiment.experimentId);
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
