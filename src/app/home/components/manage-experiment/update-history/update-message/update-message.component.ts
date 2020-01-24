import {Component, Input, OnInit} from '@angular/core';
import {UpdateMessage} from '../update-message.model';

@Component({
  selector: 'app-update-message',
  templateUrl: './update-message.component.html',
  styleUrls: ['./update-message.component.css']
})
export class UpdateMessageComponent implements OnInit {
  @Input() message: UpdateMessage;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }


  convertUTCToLocal(postDate) {
    return this.formatDate(new Date(postDate + " UTC"));
  }

  formatDate(date) {
    return [date.getDate(), this.addLeadingZero(date.getMonth() + 1), date.getFullYear()].join('-') + ' ' +
      [date.getHours(), this.addLeadingZero(date.getMinutes()) ].join(':');
  }

  private addLeadingZero(number: number) {
    return String(number).padStart(2, '0')
  }
}
