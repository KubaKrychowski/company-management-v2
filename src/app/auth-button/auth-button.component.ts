import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <i
        (click)="auth.logout({ returnTo: 'http://localhost:4200/home' })"
        class="bi bi-box-arrow-right log-button">
      </i>
    </ng-container>

    <ng-template #loggedOut>
      <i
        class="bi bi-box-arrow-in-left log-button"
        (click)="auth.loginWithRedirect()">
      </i>
    </ng-template>
  `,
  styles: [
    '.log-button { padding: 0 0.25em; border-radius: 0.5em;}',
    '.log-button:hover { cursor: pointer; background-color: rgba(120, 201, 230, 0.36); }'
  ],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}
