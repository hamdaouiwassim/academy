import { TestBed } from '@angular/core/testing';

import { ReservebookService } from './reservebook.service';

describe('ReservebookService', () => {
  let service: ReservebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
