import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MatTextareaComponent} from './mat-textarea.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../../shared/shared.module';
import {UserModule} from '../../../user/user.module';
import {HomeModule} from '../../home.module';

describe('MatTextareaComponent', () => {
  let component: MatTextareaComponent;
  let fixture: ComponentFixture<MatTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
