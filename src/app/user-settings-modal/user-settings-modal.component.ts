import { AuthService } from '@auth0/auth0-angular';
import { User } from './../shared/user.model';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-modal',
  templateUrl: './user-settings-modal.component.html',
  styleUrls: ['./user-settings-modal.component.scss']
})
export class UserSettingsModalComponent implements OnInit {

  testingString: string = 'Test';

  user: User = {
    Name: '',
    email: '',
    Nickname: '',
    Surname: '',
    projects: [],
    tasks: [],
  }
  // ? WHY SUBSCRIPTION DOESNT WORK OUTSIDE OF FUNCTION
  email: string = '';
  imageURL: string = '';
  userDoesntExistInFirebase: boolean = false;

  constructor(private firebaseService: FirebaseService, private auth: AuthService) { }

  ngOnInit(): void {

    this
      .auth
      .user$
      .subscribe(user => {
        if (user && user.email && user.picture) {
          this.email = user.email;
          this.imageURL = user.picture;
          console.log(this.email);
          this.checkIfUserIsSavedInFirebase();
        }
      });
  }

  checkIfUserIsSavedInFirebase() {
    this
      .firebaseService
      .getUser(this.email)
      .subscribe(user => {
        this.user = user;

        if (!this.user.id) {
          this.userDoesntExistInFirebase = true;
        } else {
          this.userDoesntExistInFirebase = false;
        }
      });
  }

}
