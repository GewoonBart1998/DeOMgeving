import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageExperimentComponent } from './manage-experiment.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from '../../../shared/shared.module';
import {UserModule} from '../../../user/user.module';
import {HomeComponent} from '../../page/home.component';
import {HomeModule} from '../../home.module';

describe('ManageExperimentComponent', () => {
  let component: ManageExperimentComponent;
  let fixture: ComponentFixture<ManageExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
