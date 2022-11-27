import { TestBed } from '@angular/core/testing';

import { ASd2Service } from './asd2.service';

describe('ASd2Service', () => {
  let service: ASd2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ASd2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
