import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.css']
})
export class MatSelectComponent implements OnInit {
  inputValue: string;
  @Input() label: string;
  @Input() values: Array<{value: string, text: string}>;
  constructor() { }

  ngOnInit() {
    console.log(this.values);
  }

}
