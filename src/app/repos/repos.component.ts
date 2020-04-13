import { Component, OnInit } from '@angular/core';
import { ReposStoreService } from './repos-store/repos-store.service';
import { Observable, NEVER, BehaviorSubject } from 'rxjs';
import { Repo } from '../dtos/repo';
import { map, catchError, share, mapTo, tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'rex-repos',
  template: `
    <div class="container bg-white">
      <div class="row card p-3 my-3 bg-primary text-white">
        <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
      </div>
      <div *ngIf="isLoading | async" class="row d-flex justify-content-center">
        <div class="row spinner-border text-primary"></div>
      </div>
      <div *ngIf="errorMessage" class="alert alert-dark">
        {{ errorMessage }}
      </div>
      <rex-repos-list [repos]="repos | async" class="row"></rex-repos-list>
    </div>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]> = NEVER;
  errorMessage: string | null = null;
  isLoading = new BehaviorSubject<boolean>(false);

  readonly userNotFoundMsg = 'User not found';
  readonly genericErrorMsg = 'Fetching data from Github failed';

  constructor(private reposStore: ReposStoreService) { }

  showRepos(user: string): void {
    this.errorMessage = null;
    this.isLoading.next(true);

    this.repos = this.reposStore.getNonForkReposByUser$(user).pipe(
      catchError(err => {
        this.errorMessage = (err.status === 404) ? this.userNotFoundMsg : this.genericErrorMsg;
        return [];
      }),
      finalize(() => this.isLoading.next(false))
    );
  }

  ngOnInit(): void {
  }
}
