import { Injectable } from '@angular/core';
import { Repo } from '../../dtos/repo';
import { Observable } from 'rxjs';
import { ReposApiService } from 'src/app/github-api/repos-api/repos-api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReposStoreService {

  constructor(private reposApi: ReposApiService) { }

  getNonForkReposByUser$(user: string): Observable<Repo[]> {
    return this.reposApi.fetchReposByUser$(user).pipe(
      map(repos =>
        repos.filter(repo => !repo.isFork)
      )
    );
  }
}
