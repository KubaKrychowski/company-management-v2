import { FirebaseService } from './firebase.service';
import { v4 } from 'uuid';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserProjectsIds: String[] = [];
  project: any;
  constructor(private firebaseService: FirebaseService) {
  }

  getUsersProjects() {
    this.firebaseService.sendGetRequest('projects').subscribe(
      responseData =>
        this.project = { id: responseData }
    )
  }

  getUser() {
    this.firebaseService.sendGetRequest('Users').subscribe(
      responseData => {
        console.log(responseData.projects)
          this.UserProjectsIds = responseData.projects;
      }
    )
  }

  getProject() {
    this.firebaseService.getProjects(this.UserProjectsIds[1]).subscribe(responseData => console.log(responseData));
  }


}

