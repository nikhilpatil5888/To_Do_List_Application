import { TestBed } from '@angular/core/testing';

import { PatilService } from './service/patil.service';

describe('PatilService', () => {
  let service: PatilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
