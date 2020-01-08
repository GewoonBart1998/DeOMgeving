import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DasboardComponent} from './dasboard.component';
import {UserModule} from '../../../user/user.module';
import {HomeComponent} from '../../page/home.component';
import {HomeModule} from '../../home.module';

describe('DasboardComponent', () => {
  let component: DasboardComponent;
  let fixture: ComponentFixture<DasboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UserModule, HomeModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should user-create-form', () => {
    expect(component).toBeTruthy();
  });
});
