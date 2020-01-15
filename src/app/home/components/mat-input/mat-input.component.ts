import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-input',
  templateUrl: './mat-input.component.html',
  styleUrls: ['./mat-input.component.css']
})
export class MatInputComponent implements OnInit {
  @Input() required = false;
  @Input() label: string;
  @Input() type = 'input';
  @Input() inputValue: string = '';
  constructor() { }

  ngOnInit() {
  }

}
