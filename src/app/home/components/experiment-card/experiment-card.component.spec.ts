import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExperimentCardComponent} from './experiment-card.component';
import {UserModule} from '../../../user/user.module';
import {HomeModule} from '../../home.module';

describe('ExperimentCardComponent', () => {
  let component: ExperimentCardComponent;
  let fixture: ComponentFixture<ExperimentCardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentCardComponent);
    const testExperiment = {
      experimentId: 0,
      experiment_naam: '',
      wijziging_datum: new Date(),
      fase: '',
      color: '',
      experiment_leider_primair: '',
      experiment_leider_secundair: '',
      beschrijving: ''
    };
    component = fixture.componentInstance;
    component.experiment = testExperiment;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
