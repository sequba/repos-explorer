import { Component, OnInit } from '@angular/core';
import { ReposStoreService } from './repos-store/repos-store.service';
import { Observable, NEVER } from 'rxjs';
import { Repo } from '../dtos/repo';

@Component({
  selector: 'rex-repos',
  template: `
    <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
    <rex-repos-list [repos]="repos | async"></rex-repos-list>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos: Observable<Repo[]> = NEVER;

  constructor(private reposStore: ReposStoreService) { }

  showRepos(user: string): void {
    this.repos = this.reposStore.getNonForkReposByUser$(user);
    // handle errors?
  }

  ngOnInit(): void {
  }
}
