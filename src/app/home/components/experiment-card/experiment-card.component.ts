import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experiment-card',
  templateUrl: './experiment-card.component.html',
  styleUrls: ['./experiment-card.component.css']
})
export class ExperimentCardComponent implements OnInit {
  @Input() experiment: { fase: string; color: string; experiment_leider_primair: string; experimentId: number; experiment_leider_secundair: string; wijziging_datum: Date; experiment_naam: string };

  constructor() {
  }

  ngOnInit() {
  }

  getStatusKleur() {
    switch (this.experiment.color) {
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

  getExperimentLocalDate() {
    const createDate = new Date(this.experiment.wijziging_datum);
    return this.formatDate( new Date(createDate.toUTCString()) );
  }

  formatDate(date) {
    return [date.getDate(), this.addLeadingZero(date.getMonth() + 1), date.getFullYear()].join('-') + ' ' +
      [date.getHours(), this.addLeadingZero(date.getMinutes()) ].join(':');
  }

  private addLeadingZero(number: number) {
    return String(number).padStart(2, '0')
  }

}
