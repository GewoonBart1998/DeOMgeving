import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {ExperimentService} from '../../experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  @Output() experimentClick: EventEmitter<Experiment> = new EventEmitter<Experiment>();

  private experimentList: Array<Experiment>;

  constructor(private experimentService: ExperimentService,
              private snackbar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
    this.experimentService.list().subscribe(res => {
        this.experimentList = res;
      },
      error => {
        this.snackbar.open('Kon experimenten niet inladen', '', {
          duration: 2000,
          // here specify the position
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
  }

  onExperimentClick(experiment: Experiment) {
    this.experimentClick.emit(experiment);
  }
}
