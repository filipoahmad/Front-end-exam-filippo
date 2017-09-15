import { TestBed, inject } from '@angular/core/testing';

import { APIServiceService } from './apiservice.service';


describe('ApiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [APIServiceService]
    });
  });

  it('should be created', inject([APIServiceService], (service: APIServiceService) => {
    expect(service).toBeTruthy();
  }));
});
