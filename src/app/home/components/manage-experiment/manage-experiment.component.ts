import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from '../experiment-card/experiment';

@Component({
  selector: 'app-manage-experiment',
  templateUrl: './manage-experiment.component.html',
  styleUrls: ['./manage-experiment.component.css']
})
export class ManageExperimentComponent implements OnInit {
  @Input()
  private experiment: Experiment;
  private localExperiment: Experiment;

  constructor() {
  }

  ngOnInit() {
    if (this.experiment) {
      this.localExperiment = this.experiment;
    }
  }

  getExperimentAttribute(attribute: string) {
    if (this.localExperiment) {
      return !this.localExperiment[attribute] ? '' : this.localExperiment[attribute];
    }
    return '';
  }


  getSecondaryExperimentLeader() {
    if (this.localExperiment) {
      return this.getExperimentAttribute('experiment_leider_secundary');
    }
    return '';
  }

  getPrimaryExperimentLeader() {
    if (this.localExperiment) {
      return this.getExperimentAttribute('experiment_leider_primary');
    }
    return '';

  }
}
