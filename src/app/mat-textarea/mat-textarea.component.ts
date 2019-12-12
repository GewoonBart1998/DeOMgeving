import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-textarea',
  templateUrl: './mat-textarea.component.html',
  styleUrls: ['./mat-textarea.component.css']
})
export class MatTextareaComponent implements OnInit {
  @Input() label: string;
  @Input() type = 'input';
  @Input() inputValue: string;
  constructor() { }

  ngOnInit() {
  }

}
