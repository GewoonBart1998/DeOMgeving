import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputComponent } from './mat-input.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../../shared/shared.module';
import {UserModule} from '../../../user/user.module';
import {HomeComponent} from '../../page/home.component';
import {HomeModule} from '../../home.module';

describe('MatInputComponent', () => {
  let component: MatInputComponent;
  let fixture: ComponentFixture<MatInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
