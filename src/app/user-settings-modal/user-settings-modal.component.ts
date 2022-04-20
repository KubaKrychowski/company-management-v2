import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-modal',
  templateUrl: './user-settings-modal.component.html',
  styleUrls: ['./user-settings-modal.component.scss']
})
export class UserSettingsModalComponent implements OnInit {

  testingString: string = 'Test';

  constructor() { }

  ngOnInit(): void {
  }

}
