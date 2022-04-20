import { UserService } from './../services/user.service';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private usersService: UserService, private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  createTestUser() {
    this.firebaseService.createUserData();
  }

  getUser() {
    this.usersService.getUser();
  }

  createProject() {
    this.firebaseService.createProject();
  }

  createTask() {
    this.firebaseService.createTask();
  }
}
