import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rex-repos-list',
  template: `
    <div>{{ repos }}</div>
  `,
  styles: []
})
export class ReposListComponent implements OnInit {
  @Input() repos?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
