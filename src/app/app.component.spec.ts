import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule } from '@angular/material/';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserRegisterComponent} from './user-register/user-register.component';
import {DasboardComponent} from './dasboard/dasboard.component';

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

  it('should create the app', () => {
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
