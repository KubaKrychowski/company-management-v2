import { LocalStorageService } from './local-storage.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserProjectsIds: String[] | null = null;
  userLoggedIn: User | null = null;
  project: any;

  constructor(private firebaseService: FirebaseService, private localStorageService: LocalStorageService) {
  }

  getUser() {
    this
      .firebaseService
      .getUser('kubolot33123@gmail.com')
      .subscribe(resData => {
        this.localStorageService.saveUserDataToLocalStorage(resData);
      });
  }

  getProject() {
    if (this.UserProjectsIds) {
      this
        .firebaseService
        .getProjects(this.UserProjectsIds[1])
        .subscribe(responseData => console.log(responseData));
    }else {
      console.error('There is no projects IDs in array');
    }
  }
}

