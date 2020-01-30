import {Component, Input, OnInit} from '@angular/core';
import {UpdateMessage} from '../update-message.model';
import {post} from 'selenium-webdriver/http';

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
    const createDate = new Date(postDate);
    createDate.setTime(createDate.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
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
