import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserLoginComponent} from './user-login.component';
import {UserModule} from '../../user.module';
import {DasboardComponent} from '../../../home/components/dasboard/dasboard.component';

describe('UserLoginComponent', () => {
  let component: UserLoginComponent;
  let fixture: ComponentFixture<UserLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardComponent],
      imports: [UserModule]
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
