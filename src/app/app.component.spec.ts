import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule, UserModule],
      declarations: [AppComponent]
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
