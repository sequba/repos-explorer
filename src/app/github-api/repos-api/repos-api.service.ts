import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { tap, map, switchMap } from 'rxjs/operators';

import { RepoResponse } from './responses/repo-response';
import { Repo } from 'src/app/dtos/repo';
import { BranchResponse } from './responses/branch-response';
import { Branch } from 'src/app/dtos/branch';


@Injectable({
  providedIn: 'root'
})
export class ReposApiService {
  readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  fetchReposByUser$(user: string): Observable<Repo[]> {
    const url = `${this.apiUrl}/users/${user}/repos`;

    return this.http.get<RepoResponse[]>(url).pipe(
      map(repos => repos.map(this.buildRepoDto)),
      switchMap(repos => {
        const reposWithBranches: Observable<Repo>[] = repos.map(this.fetchBranchesForRepo$.bind(this));
        return (reposWithBranches.length > 0) ? forkJoin(reposWithBranches) : of([]);
      })
    );
  }

  private fetchBranchesForRepo$(repo: Repo): Observable<Repo> {
    const url = `${this.apiUrl}/repos/${repo.fullName}/branches`;

    return this.http.get<BranchResponse[]>(url).pipe(
      map(branchesRes => {
        const branches = branchesRes.map(this.buildBranchDto);
        return {...repo, branches} as Repo;
      })
    );
  }

  private buildRepoDto(res: RepoResponse): Repo {
    return {
      name: res.name,
      fullName: res.full_name,
      owner: res.owner.login,
      isFork: res.fork
    };
  }

  private buildBranchDto(res: BranchResponse): Branch {
    return {
      name: res.name,
      lastCommitSha: res.commit.sha
    };
  }
}
