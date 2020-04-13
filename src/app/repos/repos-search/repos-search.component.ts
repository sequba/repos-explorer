import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'rex-repos-search',
  template: `
  <form action="javascript:void(0);">
    <div>
      <input #usernameInput type="text" placeholder="Github username" (keyup)="clearValidationMessage()">
      <div *ngIf="validationMessage" class="validation_message">{{ validationMessage }}</div>
    </div>
    <button (click)="emitUsername(usernameInput.value)" class="btn btn-light">Show repos</button>
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
