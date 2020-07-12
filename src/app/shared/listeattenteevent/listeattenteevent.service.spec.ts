import { TestBed } from '@angular/core/testing';

import { ListeattenteeventService } from './listeattenteevent.service';

describe('ListeattenteeventService', () => {
  let service: ListeattenteeventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeattenteeventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
