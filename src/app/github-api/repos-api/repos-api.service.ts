import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { RepoResponse } from './responses/repo-response';
import { Repo } from 'src/app/dtos/repo';


@Injectable({
  providedIn: 'root'
})
export class ReposApiService {
  readonly apiUrl = 'https://api.github.com';


  constructor(private http: HttpClient) { }

  fetchReposByUser$(user: string): Observable<Repo[]> {
    const url = `${this.apiUrl}/users/${user}/repos`;
    return this.http.get<RepoResponse[]>(url).pipe(tap(console.log));
  }

  convertRepoResponse(res: RepoResponse): Repo {
    return {
      name: res.name,
      owner: res.owner.login,
      isFork: res.fork,
      branches: []
    };
  }
}
