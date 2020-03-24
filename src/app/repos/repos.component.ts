import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rex-repos',
  template: `
    <rex-repos-search (username)="showRepos($event)"></rex-repos-search>
    <rex-repos-list [repos]="repos"></rex-repos-list>
  `,
  styles: []
})
export class ReposComponent implements OnInit {
  repos = '';

  constructor() { }

  showRepos(user: string) {
    this.repos = `Repos owned by ${user}`;
  }

  ngOnInit(): void {
  }

}
