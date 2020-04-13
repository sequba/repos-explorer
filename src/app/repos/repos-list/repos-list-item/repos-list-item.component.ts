import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list-item',
  template: `
    <ng-container *ngIf="repo">
      <h3>{{ repo.name }} <span class="badge badge-secondary">{{ repo.owner}}</span></h3>

      <ng-container *ngIf="repo.branches && repo.branches.length > 0">
        <table class="table table-bordered table-dark table-sm">
          <thead><tr>
            <th>Branch</th>
            <th>Last commit SHA</th>
          </tr></thead>
          <tbody><tr *ngFor="let branch of repo.branches">
            <td>{{ branch.name }}</td>
            <td>{{ branch.lastCommitSha }}</td>
          </tr></tbody>
        </table>
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
