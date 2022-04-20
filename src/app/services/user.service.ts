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

  UserProjectsIds: String[] | null = null;
  userLoggedIn: User | null = null;
  projects: Project[] = [];
  tasks: Task[] = [];

  constructor(private firebaseService: FirebaseService, private localStorageService: LocalStorageService) {
    this.UserProjectsIds = this.localStorageService.getUsersProjectsIds();
  }

  getUser() {
    this
      .firebaseService
      .getUser('kkrychowski@interia.pl')
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

  getTask(taskID: string) {
    this
    .firebaseService
    .getTask(taskID)
    .subscribe(task => this.tasks.push(task));
  }
}

