import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list-item',
  template: `
    <div *ngIf="repo" class="card bg-light my-3">
      <div class="card-body px-0 px-sm-4">
        <h3 class="card-title">{{ repo.name }} <span class="badge badge-secondary">{{ repo.owner}}</span></h3>

        <ng-container *ngIf="repo.branches && repo.branches.length > 0">
          <table class="card-text table table-bordered table-sm small">
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
      </div>
    </div>
  `,
  styles: []
})
export class ReposListItemComponent implements OnInit {
  @Input() repo?: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
