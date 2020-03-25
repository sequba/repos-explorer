import { Component, OnInit } from '@angular/core';
import { ReposStoreService } from './repos-store/repos-store.service';
import { Observable, NEVER } from 'rxjs';
import { Repo } from '../dtos/repo';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'rex-repos',
  template: `
    <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
    <div *ngIf="errorMessage" class="error_message">{{ errorMessage }}</div>
    <rex-repos-list [repos]="repos | async"></rex-repos-list>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]> = NEVER;
  errorMessage: string | null = null;

  readonly userNotFoundMsg = 'User not found';
  readonly genericErrorMsg = 'Fetching data from Github failed';

  constructor(private reposStore: ReposStoreService) { }

  showRepos(user: string): void {
    this.errorMessage = null;

    this.repos = this.reposStore.getNonForkReposByUser$(user).pipe(catchError(err => {
      this.errorMessage = (err.status === 404) ? this.userNotFoundMsg : this.genericErrorMsg;
      return NEVER;
    }));
  }

  ngOnInit(): void {
  }
}
