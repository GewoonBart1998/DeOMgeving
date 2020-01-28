import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserRegisterComponent} from './user-register.component';
import {UserModule} from '../../user.module';
import {HomeModule} from '../../../home/home.module';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text block enabled', () => {
    expect(component.passwordHidden).toEqual(true);
  });

  it('should have text blocked', () => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input')).toBeTruthy();
  });
});
