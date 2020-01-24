import {Component, OnInit} from '@angular/core';
import {ExperimentService} from '../../service/experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
  experimentList: Array<Experiment>;
  filterName: String;

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
          //TODO snackbar call method maken
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
  }



  changePhase(event){
    if(event.target.value == 'none'){
      this.experimentService.list().subscribe(res => {
        this.experimentList = res;
      });
    }else {
      this.experimentService.filterBy(event.target.value).subscribe(
        res => {
          this.experimentList = res;
        });
    }
  }

  onSearch(searchvalue: string) {
    this.filterName = "";
    this.experimentService.searchBy(searchvalue).subscribe(
      res => {
        this.experimentList = res;
      });
  }

  onExperimentClick(experiment: Experiment) {
    this.router.navigate([`/home/experiment/${experiment.experimentId}`]);
  }
}
