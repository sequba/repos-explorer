import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rex-repos-search',
  template: `
  <form action="javascript:void(0);" class="form form-inline dflex justify-content-center align-items-start mt-3">
    <div class="form-group-inline">
      <input #usernameInput type="text" (input)="clearValidationMessage()" placeholder="Github username" class="form-control">
      <small [ngStyle]="{'visibility': validationMessage ? 'visible' : 'hidden'}" class="form-text validation_message">
        {{ emptyUsernameMsg }}
      </small>
    </div>
    <button (click)="emitUsername(usernameInput.value)" class="btn btn-light mx-1">Show repos</button>
  </form>
  `,
  styles: []
})
export class ReposSearchComponent implements OnInit {
  validationMessage: string | null = null;
  @Output() username = new EventEmitter<string>();
  readonly emptyUsernameMsg = 'Username cannot be empty';

  constructor() { }

  emitUsername(usernameInputValue: string): void {
    if (usernameInputValue) {
      this.username.emit(usernameInputValue);
    } else {
      this.validationMessage = this.emptyUsernameMsg;
    }
  }

  clearValidationMessage(): void {
    this.validationMessage = null;
  }

  ngOnInit(): void {
  }
}
