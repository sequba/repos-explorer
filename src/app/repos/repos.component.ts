import { Component, OnInit } from '@angular/core';
import { ReposStoreService } from './repos-store/repos-store.service';
import { Observable, NEVER } from 'rxjs';

@Component({
  selector: 'rex-repos',
  template: `
    <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
    <rex-repos-list [repos]="repos | async"></rex-repos-list>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos: Observable<string> = NEVER;

  constructor(private reposStore: ReposStoreService) { }

  showRepos(user: string): void {
    this.repos = this.reposStore.getReposByUser$(user);
  }

  ngOnInit(): void {
  }

}
