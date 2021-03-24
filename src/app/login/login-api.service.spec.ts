/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginApiService } from './login-api.service';

describe('Service: LoginApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginApiService]
    });
  });

  it('should ...', inject([LoginApiService], (service: LoginApiService) => {
    expect(service).toBeTruthy();
  }));
});
