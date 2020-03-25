import { Component } from '@angular/core';

@Component({
  selector: 'rex-root',
  template: `
    <h1>ReposExplorer</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'repos-explorer';
}
