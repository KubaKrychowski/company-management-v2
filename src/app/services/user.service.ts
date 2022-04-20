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
  UserTasksIds: String[] | null = null;
  userLoggedIn: User | null = null;

  projects: Project[] = [];
  tasks: Task[] = [];

  constructor(private firebaseService: FirebaseService, private localStorageService: LocalStorageService) {
    this.UserTasksIds = this.localStorageService.getUsersTasksIds();
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

