import { AuthService } from '@auth0/auth0-angular';
import { LocalStorageService } from './local-storage.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Project } from '../shared/project.model';
import { Task } from '../shared/task.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  projects: Project[] = [];
  tasks: Task[] = [];

  userProfile: User | null = null;

  userIsLoggedIn: boolean = false; // When user is logged by auth0
  userProfileDoesntExistInFirebase: boolean = true; //when userProfile is not avaliable from firebase

  constructor(
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    authService: AuthService) {

    authService.user$.subscribe(userData => {
      if (userData && userData.email) {
        this.userIsLoggedIn = true;
        this.getUser(userData.email); // looking for profile in firebase
      }
    });
  }

  getUser(email: string) {
    this
      .firebaseService
      .getUser(email)
      .subscribe(userProfileData => {
        if(userProfileData.id){
          this.userProfileDoesntExistInFirebase = false;
          this.localStorageService.saveUserDataToLocalStorage(userProfileData);
          this.userProfile = userProfileData;
          console.log(this.userProfile);
        } else {
          console.warn('user under:' + email + ' email doesnt exist in firebase');
        }

      });
  }

  getUserProject(projectID: String) {
    this
      .firebaseService
      .getProject(projectID)
      .subscribe(
        project => {
          const projectIsAlreadyAssigned = this.checkIfProjectIsAlreadyAssignedToArray(project);

          if (!projectIsAlreadyAssigned)
            this.projects.push(project);
        }
      );
  }

  getUserTask(taskID: string) {
    this
      .firebaseService
      .getTask(taskID)
      .subscribe(
        task => {
          const taskIsAlreadyAssigned = this.checkIfTaskIsAlreadyAssignedToArray(task);

          if (!taskIsAlreadyAssigned)
            this.tasks.push(task);
        }
      );
  }

  checkIfProjectIsAlreadyAssignedToArray(projectToCompare: Project): boolean {
    const foundProject = this.projects.find(projectToFind => projectToFind.title === projectToCompare.title);

    if (foundProject)
      return true;
    else
      return false;
  }

  checkIfTaskIsAlreadyAssignedToArray(taskToCompare: Task): boolean {
    const foundTask = this.tasks.find(taskToFind => taskToFind.title === taskToCompare.title);

    if (foundTask)
      return true;
    else
      return false;
  }
}

