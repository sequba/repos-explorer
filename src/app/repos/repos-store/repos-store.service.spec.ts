import { TestBed } from '@angular/core/testing';

import { ReposStoreService } from './repos-store.service';

describe('ReposStoreService', () => {
  let service: ReposStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReposStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
