import { Component } from '@angular/core';

@Component({
  selector: 'rex-root',
  template: `
    <div class="jumbotron text-center">
      <h1>ReposExplorer</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'repos-explorer';
}
