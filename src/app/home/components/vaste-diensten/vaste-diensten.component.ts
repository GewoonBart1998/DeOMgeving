import {Component, OnInit} from '@angular/core';
import {ExperimentService} from '../../service/experiment.service';
import {Experiment} from '../experiment-card/experiment';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-vaste-diensten',
  templateUrl: './vaste-diensten.component.html',
  styleUrls: ['./vaste-diensten.component.css']
})
export class VasteDienstenComponent implements OnInit {
  experimentList: Array<Experiment>;
  filterName: String;


  constructor(private experimentService: ExperimentService,
              private snackbar: MatSnackBar,
              private router: Router) {
  }



  ngOnInit() {
    this.experimentService.filterBy("vaste dienst/wijziging_datum/ASC").subscribe(
      res => {
        this.experimentList = res;
      },
      error => {
        this.snackbar.open('Kon diensten niet inladen', '', {
          duration: 2000,
          // here specify the position
          //TODO snackbar call method maken
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      });
  }

  changePhase(event){
    this.experimentService.filterBy(event.target.value).subscribe(
      res => {
        this.experimentList = res;
      });

  }

  onSearchDienst(searchvalue: string) {
    this.filterName = "";
    this.experimentService.searchByDienst(searchvalue).subscribe(
      res => {
        this.experimentList = res;
      });
  }

  onExperimentClick(experiment: Experiment) {
    this.router.navigate([`/home/experiment/${experiment.experimentId}`]);
  }

}
