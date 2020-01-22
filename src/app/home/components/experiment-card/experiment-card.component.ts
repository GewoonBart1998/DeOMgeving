import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from './experiment';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: Experiment;

  constructor() {
  }

  ngOnInit() {
  }

  public setExperiment(experiment: Experiment) {
    this.experiment = experiment;
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

        case "Blauw":
          return "blue";
          break;
      }
    }
}
