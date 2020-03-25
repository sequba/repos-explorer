import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list',
  template: `
    <ng-container *ngIf="repos">
      <p *ngIf="repos.length <= 0"> Found no repositories owned by this user </p>
      <ul>
        <li *ngFor="let repo of repos">
          <rex-repos-list-item [repo]="repo"></rex-repos-list-item>
        </li>
      </ul>
    </ng-container>
  `,
  styles: []
})
export class ReposListComponent implements OnInit {
  @Input() repos?: Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
