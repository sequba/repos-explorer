import { Component } from '@angular/core';

@Component({
  selector: 'rex-root',
  template: `
    <div class="jumbotron jumbotron-fluid text-center">
      <h1>ReposExplorer</h1>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .jumbotron {
      background-image: url("assets/img/header.jpg");
      background-size: cover;
      background-position: 50% 30%;
    }
  `]
})
export class AppComponent {
  title = 'repos-explorer';
}
