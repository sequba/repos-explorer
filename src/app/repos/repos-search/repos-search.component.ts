import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rex-repos-search',
  template: `
  <form action="javascript:void(0);" class="form form-inline dflex justify-content-center align-items-start mt-3">
    <div class="form-group-inline">
      <input #usernameInput type="text" (input)="clearValidationMessage()" placeholder="Github username" class="form-control">
      <small [ngClass]="{'invisible': !showMsg }" class="form-text validation_message">
        {{ emptyUsernameMsg }}
      </small>
    </div>
    <button (click)="emitUsername(usernameInput.value)" class="btn btn-light mx-1">Show repos</button>
  </form>
  `,
  styles: []
})
export class ReposSearchComponent implements OnInit {
  showMsg = false;
  @Output() username = new EventEmitter<string>();
  readonly emptyUsernameMsg = 'Username cannot be empty';

  constructor() { }

  emitUsername(usernameInputValue: string): void {
    if (usernameInputValue) {
      this.username.emit(usernameInputValue);
    } else {
      this.showMsg = true;
    }
  }

  clearValidationMessage(): void {
    this.showMsg = false;
  }

  ngOnInit(): void {
  }
}
