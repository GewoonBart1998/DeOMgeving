import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangePasswordComponent} from './change-password.component';
import {UserModule} from '../../user.module';
import {DasboardComponent} from '../../../dasboard/dasboard.component';

describe('ChangePasswordComponent', () => {
  let component: ChangePasswordComponent;
  let fixture: ComponentFixture<ChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardComponent],
      imports: [UserModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should user-create-form', () => {
    expect(component).toBeTruthy();
  });
});
