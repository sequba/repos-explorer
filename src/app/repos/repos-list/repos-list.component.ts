import { Component, OnInit, Input } from '@angular/core';
import { Repo } from 'src/app/dtos/repo';

@Component({
  selector: 'rex-repos-list',
  template: `
    <ul>
      <li *ngFor="let repo of repos">
        <rex-repos-list-item [repo]="repo"></rex-repos-list-item>
      </li>
    </ul>
  `,
  styles: []
})
export class ReposListComponent implements OnInit {
  @Input() repos?: Repo[];

  constructor() { }

  ngOnInit(): void {
  }

}
