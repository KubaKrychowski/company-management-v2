import { v4 } from 'uuid';
import { transaction } from './../shared/transaction.model';
import { Task } from 'src/app/shared/task.model';
import { Project } from './../shared/project.model';
import { User } from './../shared/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const FIREBASE_URL = 'https://company-management-v2-default-rtdb.europe-west1.firebasedatabase.app/';
//TODO: Change all methods name for getRequest(params) postRequest(params) etc.

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  projects: Project[] = [];

  constructor(private http: HttpClient) { }

  getUser(userEmail: string) {

    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"email"');
    searchParams = searchParams.append('equalTo', '"' + userEmail + '"');

    return this
      .http
      .get<{ [key: string]: User }>(FIREBASE_URL + 'Users.json', { params: searchParams })
      .pipe(
        map(responseData => {
          let user: User = {
            Name: '',
            Nickname: '',
            Surname: '',
            position: '',
            imageURL: '',
            id: '',
            email: '',
            projects: [],
            transactions: [],
            tasks: []
          };

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              user = { ...responseData[key], id: key };
            }
          };
          return user;
        }
        ));
  }

  getProject(projectId: String) {

    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"$key"');
    searchParams = searchParams.append('equalTo', '"' + projectId + '"');

    return this
      .http
      .get<{ [key: string]: Project }>(FIREBASE_URL + 'projects.json', { params: searchParams })
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
          };
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
          };
          return task;
        })
      );
  }

  postUserProfile(user: User,) {
    this
      .http
      .post(FIREBASE_URL + 'Users.json', user)
      .subscribe(responseData => console.log(responseData));
  }

  updateUserProfile(user: User, userID: string) {
    this
      .http
      .patch(FIREBASE_URL + 'Users/' + userID + '.json', user).subscribe(
        responseData => {
          console.log(responseData);
        }
      );
  }

  createTransaction(transaction: transaction) {
    return this.http.post(FIREBASE_URL + 'transactions.json', transaction);
  }

  getTransaction(transactionID: string) {
    let searchParams = new HttpParams();

    searchParams = searchParams.append('orderBy', '"id"');
    searchParams = searchParams.append('equalTo', '"' + transactionID + '"');

    return this
      .http
      .get<{ [key: string]: transaction }>(
        FIREBASE_URL + 'transactions.json',
        { params: searchParams })
      .pipe(
        map(responseData => {
          let transaction: transaction = {
            type: '',
            value: 0,
            id: '',
          };

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              transaction = { ...responseData[key] };
            }
          };
          return transaction;
        })
      );
  }
}
