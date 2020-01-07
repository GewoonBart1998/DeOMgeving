import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Experiment} from '../components/experiment-card/experiment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loadedScreen = 'experiments';
  private selectedExperiment: Experiment = null;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  onExperimentClick(experiment) {
    this.cdRef.detectChanges();
    this.selectedExperiment = experiment;
    this.loadedScreen = 'showExperiment';
  }

  getClickedExperiment() {
    this.clearSelectedExperimentAftherDelay();
    if (this.selectedExperiment != null) {
      return this.selectedExperiment;
    }
  }

  private clearSelectedExperimentAftherDelay() {
    setTimeout(() => {
      this.selectedExperiment = null;
    }, 4000);
  }
}
