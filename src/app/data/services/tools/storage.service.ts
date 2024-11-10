import {Injectable} from '@angular/core';
import { SavedUserModel } from '../../models/storage/saved-user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  localStorageKeys = ["currentUser"];

  constructor() {
  }

  save(key: string, value: string) {
    if (typeof (Storage) !== 'undefined') {
      localStorage.setItem(key, value);
    }
  }

  getSavedUser(): SavedUserModel | null {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const savedUser = JSON.parse(currentUser);
      return new SavedUserModel(savedUser.username, savedUser.course, savedUser.rol);
    }
    return null;
  }

  remove(key: string) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.removeItem(key);
    }
  }  
}
