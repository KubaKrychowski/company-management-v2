import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile-creator-modal',
  templateUrl: './profile-creator-modal.component.html',
  styleUrls: ['./profile-creator-modal.component.scss']
})
export class ProfileCreatorModalComponent {

  newUserName: string = '';
  newUserSurname: string = '';
  newUserNickname: string = '';
  newUserImageURL: string = '';
  newPosition: string = '';
  constructor(private userService: UserService) { }



  onCreateNewProfile() {
    console.log('works');
    this.userService.createUserProfile(this.newUserName, this.newUserSurname, this.newUserNickname, this.newUserImageURL, this.newPosition);

    setTimeout(() => {
      window.location.reload();
    }, 2000);

  }
}
