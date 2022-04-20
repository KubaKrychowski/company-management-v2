import { Task } from 'src/app/shared/task.model';
import { Project } from './../shared/project.model';
import { User } from './../shared/user.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const FIREBASE_URL = 'https://company-management-v2-default-rtdb.europe-west1.firebasedatabase.app/';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  projects: Project[] = [];
  // !Testing Objects
  user: User = {
    Name: 'Kuba',
    Surname: 'Krychowski',
    email: 'kkrychowski@interia.pl',
    projects: ['-N01PELJWA0sXci1EHOA'],
    tasks: ['-N04HuafacV-fV714rCT']
  };

  project: Project = {
    title: 'second project',
    description: 'company simulator',
    isImportant: false,
    usersIDs: ['zlfjkgzdlgnalg',]
  };

  task: Task = {
    title: 'Send CV',
    description: 'Send Cv on noflufjobs,justjoin.it etc.',
    isImportant: true,
    userId: 'zlfjkgzdlgnalg'
  };
  //!
  constructor(private http: HttpClient) { }

  getUser(userEmail: string) {

    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"email"');
    searchParams = searchParams.append('equalTo', '"' + userEmail + '"');

    return this
      .http
      .get<{ [key: string]: User }>(FIREBASE_URL + 'Users.json',
        {
          params: searchParams
        }
      )
      .pipe(
        map(responseData => {
          let user: User = {
            Name: '',
            Surname: '',
            id: '',
            email: '',
            projects: [],
            tasks: []
          };

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              user = { ...responseData[key], id: key };
            }
          }
          return user;
        }
        ));
  }

  getProject(projectId: String) {

    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"$key"');
    searchParams = searchParams.append('equalTo', '"' + projectId + '"');

    return this.http.get<{ [key: string]: Project }>(FIREBASE_URL + 'projects.json',
      {
        params: searchParams
      })
      .pipe(
        map(responseData => {
          let project: Project = {
            title: '',
            description: '',
            isImportant: false,
            usersIDs: [],
            id: '',
          };

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              project = { ...responseData[key], id: key };
            }
          }
          return project;
        })
      );
  }

  getTask(taskID: string) {

    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"$key"');
    searchParams = searchParams.append('equalTo', '"' + taskID + '"');

    return this
      .http
      .get<{ [key: string]: Task }>(FIREBASE_URL + 'tasks.json',
        {
          params: searchParams
        })
      .pipe(
        map(responseData => {
          let task: Task = {
            title: '',
            description: '',
            isImportant: false,
            userId: '',
            id: ''
          };

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              task = { ...responseData[key], id: key };
            }
          }
          return task;
        })
      );
  }

  createProject() {
    this
      .http
      .post<[name: string]>(FIREBASE_URL + 'projects.json', this.project);
  }

  createTask() {
    this
      .http
      .post<[name: string]>(FIREBASE_URL + 'tasks.json', this.task);
  }

  createUserData() {
    this
      .http
      .post<[name: string]>(FIREBASE_URL + 'Users.json', this.user);
  }
}
