import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rex-repos',
  template: `
    <rex-repos-search></rex-repos-search>
    <rex-repos-list></rex-repos-list>
  `,
  styles: []
})
export class ReposComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
