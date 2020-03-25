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

  describe('getNonForkReposByUser$', () => {
    it('should return only non-fork repos', (done) => {
      service.getNonForkReposByUser$('testuser').subscribe(repos => {
        fail();
        done();
      });
    });
  });
});
