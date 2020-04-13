import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list',
  template: `
    <div *ngIf="repos" class="container">
      <ng-container *ngFor="let repo of repos">
        <rex-repos-list-item [repo]="repo"></rex-repos-list-item>
      </ng-container>
    </div>
  `,
  styles: []
})
export class ReposListComponent implements OnInit {
  @Input() repos?: Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
