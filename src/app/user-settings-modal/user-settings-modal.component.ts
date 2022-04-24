import { FirebaseService } from './../services/firebase.service';
import { UserService } from 'src/app/services/user.service';
import { User } from './../shared/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-settings-modal',
  templateUrl: './user-settings-modal.component.html',
  styleUrls: ['./user-settings-modal.component.scss']
})
export class UserSettingsModalComponent implements OnInit {

  imageURL: string = '';
  email: string = '';
  userDoesntExistInFirebase: boolean = false;
  isEditModeEnabled: boolean = false;

  user: User = {
    Name: '',
    email: '',
    Nickname: '',
    position: '',
    imageURL: '',
    Surname: '',
    projects: [],
    transactions: [],
    tasks: [],
  }

  constructor(public userService: UserService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if (this.userService.userProfile) {
      this.user = this.userService.userProfile;
    }
  }

  changeImage() {
    this.user.imageURL = this.imageURL;
  }

  toggleEditProfileMode() {
    this.isEditModeEnabled = !this.isEditModeEnabled;
  }

  editUserProfile() {
    if (this.userService.userProfile && this.userService.userProfile.id) {
      this.firebaseService.updateUserProfile(this.user, this.userService.userProfile.id);
    } else{
      console.error('userProfile is not defined or userProfile.id is null');
    }
  }
}
