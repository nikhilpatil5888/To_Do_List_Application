import { TestBed } from '@angular/core/testing';

import { NikhilService } from './nikhil.service';

describe('NikhilService', () => {
  let service: NikhilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NikhilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
