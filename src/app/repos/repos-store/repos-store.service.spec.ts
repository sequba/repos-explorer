import { TestBed } from '@angular/core/testing';

import { ReposStoreService } from './repos-store.service';
import { ReposApiService } from 'src/app/github-api/repos-api/repos-api.service';
import { of } from 'rxjs';
import { Repo } from 'src/app/dtos/repo';

describe('ReposStoreService', () => {
  let service: ReposStoreService;

  const reposMock: Repo[] = [
    {name: 'repo1', fullName: 'repo1', owner: 'user', isFork: false},
    {name: 'repo2', fullName: 'repo2', owner: 'user', isFork: false},
    {name: 'fork', fullName: 'fork', owner: 'user', isFork: true}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [{provide: ReposApiService, useValue: {fetchReposByUser$: () => of(reposMock)}}]});
    service = TestBed.inject(ReposStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getNonForkReposByUser$', () => {
    it('should return only non-fork repos', (done) => {
      service.getNonForkReposByUser$('testuser').subscribe(repos => {
        expect(repos.length).toEqual(2);
        done();
      });
    });
  });
});
