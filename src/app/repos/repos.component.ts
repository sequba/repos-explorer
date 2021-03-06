import { Component, OnInit } from '@angular/core';
import { ReposStoreService } from './repos-store/repos-store.service';
import { Observable, NEVER, BehaviorSubject } from 'rxjs';
import { Repo } from '../dtos/repo';
import { catchError, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'rex-repos',
  template: `
    <div class="container bg-white">
      <div class="row card p-3 my-3 bg-primary text-white">
        <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
      </div>
      <div *ngIf="isLoading | async" class="row">
        <div class="row spinner-border text-primary mx-auto"></div>
      </div>
      <div *ngIf="message" class="alert alert-dark m-5">
        {{ message }}
      </div>
      <rex-repos-list [repos]="repos | async" class="row"></rex-repos-list>
    </div>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]> = NEVER;
  message: string | null = null;
  isLoading = new BehaviorSubject<boolean>(false);

  readonly userNotFoundMsg = 'User not found';
  readonly genericErrorMsg = 'Fetching data from Github failed';
  readonly noReposForUser = 'Found no repositories owned by this user';

  constructor(private reposStore: ReposStoreService) { }

  showRepos(user: string): void {
    this.message = null;
    this.isLoading.next(true);

    this.repos = this.reposStore.getNonForkReposByUser$(user).pipe(
      catchError(err => {
        this.message = (err.status === 404) ? this.userNotFoundMsg : this.genericErrorMsg;
        return [];
      }),
      tap(repos => {
        if (repos.length <= 0) {
          this.message = this.noReposForUser;
        }
      }),
      finalize(() => this.isLoading.next(false))
    );
  }

  ngOnInit(): void {
  }
}
