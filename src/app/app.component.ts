import { Component } from '@angular/core';

@Component({
  selector: 'rex-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'repos-explorer';
}
