import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material/';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.modules';
import {ChangePasswordComponent} from './user/page/change-password/change-password.component';
import {DasboardComponent} from './dasboard/dasboard.component';
import {UserLoginComponent} from './user/page/user-login/user-login.component';
import {UserRegisterComponent} from './user/page/user-register/user-register.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MatFormFieldModule,
        MatInputModule, MatIconModule, MatButtonModule, AppRoutingModule
      ],
      declarations: [
        AppComponent,
        ChangePasswordComponent,
        UserLoginComponent,
        UserRegisterComponent,
        DasboardComponent
      ],
    }).compileComponents();
  }));

  it('should user-create-form the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'DeOMgeving'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('DeOMgeving');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  });
});
