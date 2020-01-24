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

}
