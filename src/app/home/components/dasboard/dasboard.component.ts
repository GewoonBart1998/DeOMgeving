import {Component, OnInit} from '@angular/core';
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
  private experimentList: Array<Experiment>;

  constructor(private experimentService: ExperimentService, private snackbar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.experimentService.list().subscribe(res => {
        this.experimentList = res;
      },
      error => {
        this.snackbar.open('Kon experimenten niet inladen', '', {
          duration: 2000,
          // here specify the position
          //TODO snackbar call method maken
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
  }

  changePhase(event) {


    this.experimentService.filterBy(event.target.value).subscribe(
      res => {

      });

  }

  onSearch(searchvalue: string) {
    this.experimentService.searchBy(searchvalue).subscribe(
      res => {

      });
  }


  onExperimentClick(experiment: Experiment) {
    this.router.navigate([`/home/experiment/${experiment.experimentId}`]);
  }
}
