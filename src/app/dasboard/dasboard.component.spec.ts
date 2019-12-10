import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DasboardComponent } from './dasboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';

describe('DasboardComponent', () => {
  let component: DasboardComponent;
  let fixture: ComponentFixture<DasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
      declarations: [ DasboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
