/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DashboardApiService } from './dashboard-api.service';

describe('Service: DashboardApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardApiService]
    });
  });

  it('should ...', inject([DashboardApiService], (service: DashboardApiService) => {
    expect(service).toBeTruthy();
  }));
});
