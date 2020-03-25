import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ReposApiService } from './repos-api.service';
import { RepoResponse } from './responses/repo-response';
import { BranchResponse } from './responses/branch-response';

describe('ReposApiService', () => {
  let service: ReposApiService;
  let httpTestingController: HttpTestingController;

  const reposResponseMock: RepoResponse[] = [
    { id: 1, name: 'repo1', full_name: 'repo1', owner: {id: 1, login: 'user'}, fork: false},
    { id: 2, name: 'repo2', full_name: 'repo2', owner: {id: 1, login: 'user'}, fork: false}
  ];

  const branchesResponseMock: BranchResponse[] = [
    { name: 'branch1', commit: {url: 'url', sha: '42'}, protected: false},
    { name: 'branch1', commit: {url: 'url', sha: '42'}, protected: false}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(ReposApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchReposByUser$', () => {
    it('should return parsed response', (done) => {
      service.fetchReposByUser$('user').subscribe(result => {
        // expect(result.map(repo => repo.name)).toEqual(['repo1', 'repo2']);
        done();
      });

      const reposReq = httpTestingController.expectOne('https://api.github.com/users/user/repos');
      reposReq.flush(reposResponseMock);

      const branchesReq = httpTestingController.expectOne('https://api.github.com/repos/repo1/branches');
      branchesReq.flush(branchesResponseMock);

      const branchesReq2 = httpTestingController.expectOne('https://api.github.com/repos/repo2/branches');
      branchesReq2.flush(branchesResponseMock);
    });

    it('should return [] if user has no repos', (done) => {
      service.fetchReposByUser$('user').subscribe(result => {
        expect(result.map(repo => repo.name)).toEqual([]);
        done();
      });

      const req = httpTestingController.expectOne('https://api.github.com/users/user/repos');
      req.flush([]);
    });
  });
});
