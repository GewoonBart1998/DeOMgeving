import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppRoutingModule} from './app-routing.modules';
import {RouterTestingModule} from '@angular/router/testing';
import {UserModule} from './user/user.module';
import {HomeModule} from './home/home.module';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppRoutingModule, RouterTestingModule, UserModule, HomeModule],
      providers: [AuthGuard],
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
