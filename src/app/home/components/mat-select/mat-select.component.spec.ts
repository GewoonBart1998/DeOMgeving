import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSelectComponent } from './mat-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../../shared/shared.module';
import {UserModule} from '../../../user/user.module';
import {HomeModule} from '../../home.module';

describe('MatSelectComponent', () => {
  let component: MatSelectComponent;
  let fixture: ComponentFixture<MatSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
