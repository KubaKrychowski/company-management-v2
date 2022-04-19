import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

const LOCAL_STORAGE_USER_DATA_KEY = 'USER_DATA';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveUserDataToLocalStorage(user: User) {
    localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(user));
  }

  getUsersProjectsIds(): string[] | null {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY)
    if (localStorageData) {
      const userData: User = JSON.parse(localStorageData);

      return userData.projects;
    } else {
      return null;
    }

  }

}
