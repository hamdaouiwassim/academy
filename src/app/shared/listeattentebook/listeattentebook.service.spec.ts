import { TestBed } from '@angular/core/testing';

import { ListeattentebookService } from './listeattentebook.service';

describe('ListeattentebookService', () => {
  let service: ListeattentebookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeattentebookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
