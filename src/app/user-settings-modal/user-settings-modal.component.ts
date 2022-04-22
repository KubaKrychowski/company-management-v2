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

  user: User = {
    Name: '',
    email: '',
    Nickname: '',
    imageURL: '',
    Surname: '',
    projects: [],
    tasks: [],
  }

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.userProfile){
      this.user = this.userService.userProfile;
    }
  }
  // TODO: Change name of getUser method to getUserProfile

  changeImage() {
    this.user.imageURL = this.imageURL;
  }
}
