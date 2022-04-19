import { LocalStorageService } from './local-storage.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Project } from '../shared/project.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserProjectsIds: String[] | null = null;
  userLoggedIn: User | null = null;
  projects: Project[] = [];

  constructor(private firebaseService: FirebaseService, private localStorageService: LocalStorageService) {
    this.UserProjectsIds = this.localStorageService.getUsersProjectsIds();
  }

  getUser() {
    this
      .firebaseService
      .getUser('kubolot33123@gmail.com')
      .subscribe(resData => {
        this.localStorageService.saveUserDataToLocalStorage(resData);
      });
  }

  getProject(projectID: String) {
    this
      .firebaseService
      .getProject(projectID)
      .subscribe(project => this.projects.push(project));
  }
}

