import {Component, OnInit} from '@angular/core';
import {ExperimentService} from '../services/experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  private experimentList: Array<Experiment>;

  constructor(private experimentService: ExperimentService, private snackbar: MatSnackBar) {
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


}
