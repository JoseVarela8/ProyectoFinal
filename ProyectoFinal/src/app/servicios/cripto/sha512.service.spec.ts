import { TestBed } from '@angular/core/testing';

import { Sha512Service } from './sha512.service';

describe('Sha512Service', () => {
  let service: Sha512Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sha512Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
