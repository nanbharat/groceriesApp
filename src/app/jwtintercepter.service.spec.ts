import { TestBed } from '@angular/core/testing';

import { JwtintercepterService } from './jwtintercepter.service';

describe('JwtintercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JwtintercepterService = TestBed.get(JwtintercepterService);
    expect(service).toBeTruthy();
  });
});
