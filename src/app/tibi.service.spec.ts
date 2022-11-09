import { TestBed } from '@angular/core/testing';

import { TibiService } from './tibi.service';

describe('TibiService', () => {
  let service: TibiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TibiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
