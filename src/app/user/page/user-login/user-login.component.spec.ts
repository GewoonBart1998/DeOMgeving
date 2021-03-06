import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserLoginComponent} from './user-login.component';
import {UserModule} from '../../user.module';
import {HomeModule} from '../../../home/home.module';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
