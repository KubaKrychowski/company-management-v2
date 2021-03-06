import { AuthService } from '@auth0/auth0-angular';
import { LocalStorageService } from './local-storage.service';
import { FirebaseService } from './firebase.service';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Project } from '../shared/project.model';
import { Task } from '../shared/task.model';
import { transaction } from '../shared/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //TODO: Find better way to solve problem: duplication of tasks/projects/transactions in modal

  projects: Project[] = [];
  tasks: Task[] = [];
  transactions: transaction[] = [];

  userProfile: User | null = null;
  userEmail: string = '';
  userIsLoggedIn: boolean = false; // When user is logged by auth0
  userProfileDoesntExistInFirebase: boolean = true; //when userProfile is not avaliable from firebase

  constructor(
    private firebaseService: FirebaseService,
    private localStorageService: LocalStorageService,
    authService: AuthService) {

    authService.user$.subscribe(userData => {
      if (userData && userData.email) {
        this.userIsLoggedIn = true;
        this.userEmail = userData.email;
        this.getUser(userData.email); // looking for profile in firebase
      }
    });
  }

  getUser(email: string) {
    this
      .firebaseService
      .getUser(email)
      .subscribe(userProfileData => {
        if (userProfileData.id) {
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

  checkIfTransactionInAlreadyAssignedToArray(transactionToCompare: transaction): boolean {
    const foundTransaction = this.transactions.find(transactionToFind => transactionToFind.id === transactionToCompare.id);

    if (foundTransaction)
      return true;
    else
      return false;
  }

  createUserProfile(name: string, surname: string, nickname: string, imageURL: string, position: string) {
    if (this.userIsLoggedIn) {
      const user: User = {
        Name: name,
        Surname: surname,
        Nickname: nickname,
        position: position,
        imageURL: imageURL,
        email: this.userEmail,
        transactions: [],
        projects: [],
        tasks: []
      };

      this.firebaseService.postUserProfile(user);
    }
  }
}

