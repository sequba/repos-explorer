import { Component } from '@angular/core';

@Component({
  selector: 'rex-root',
  template: `
    <header class="jumbotron jumbotron-fluid text-center">
      <h1>ReposExplorer</h1>
    </header>
    <router-outlet></router-outlet>
  `,
  styles: [`
    header {
      background-image: url("assets/img/header.jpg");
      background-size: cover;
      background-position: 50% 30%;
    }
  `]
})
export class AppComponent {
  title = 'repos-explorer';
}
