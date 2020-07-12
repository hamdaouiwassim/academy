import { TestBed } from '@angular/core/testing';

import { ReserveEventService } from './reserve-event.service';

describe('ReserveEventService', () => {
  let service: ReserveEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
