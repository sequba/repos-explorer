import { TestBed } from '@angular/core/testing';

import { ReposStoreService } from './repos-store.service';
import { ReposApiService } from 'src/app/github-api/repos-api/repos-api.service';
import { of } from 'rxjs';

describe('ReposStoreService', () => {
  let service: ReposStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: ReposApiService, useValue: {fetchReposByUser$: () => of([])}}]});
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
