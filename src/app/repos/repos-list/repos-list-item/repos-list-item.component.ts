import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list-item',
  template: `
    <ng-container *ngIf="repo">
      <h3>{{ repo.name }}</h3>
      <div>Owner: {{ repo.owner}}</div>

      <ng-container *ngIf="repo.branches && repo.branches.length > 0">
        <div>Branches:</div>
        <ul>
          <li *ngFor="let branch of repo.branches">
            <div>{{ branch.name }}</div>
            <div>{{ branch.lastCommitSha }}</div>
          </li>
        </ul>
      </ng-container>
    <ng-container>
  `,
  styles: []
})
export class ReposListItemComponent implements OnInit {
  @Input() repo?: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
