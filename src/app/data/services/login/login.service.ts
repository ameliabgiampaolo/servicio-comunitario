import { Injectable } from '@angular/core';
import { SavedUserModel } from '../../models/storage/saved-user.model';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../tools/storage.service';
import { Router } from '@angular/router';
import { AppConfig } from '../tools/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userSubject: BehaviorSubject<SavedUserModel | null>;
  
  constructor(
    private storageService: StorageService, 
    private router: Router, 
    private appConfig: AppConfig) 
    { 
      this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('savedUser')!)?.username);
    }

    saveUser(user): void {
      //const [rol, courseAsigned] = this.assingRolAndCourse();
      const currentUser = new SavedUserModel(
        user.username, 
        user.course, 
        user.rol
      );
  
      this.storageService.save('currentUser', JSON.stringify(currentUser));
      this.userSubject.next(currentUser);
    
      this.router.navigate(['/dashboard']);
    }

    public get userValue() {
      return this.userSubject.value;
    }

    public get userSubject$() {
      return this.userSubject.asObservable();
    }

    logout() {
      this.storageService.remove('currentUser');  // remove user from local storage to log user out
      this.router.navigate(['/login']).then(
          () => {
            location.reload()
          }
      ).catch();
    }

/*     private assingRolAndCourse(): string[] {
      const roles = ['admin', 'teacher', 'student'];
      const courses = [
        'seccion_a_1', 'seccion_b_1', 
        'seccion_a_2', 'seccion_b_2', 
        'seccion_a_3', 'seccion_b_3', 
        'seccion_a_4', 'seccion_b_4', 
        'seccion_a_5', 'seccion_b_5'
      ];
      let courseAsigned: string = '';

      const rol: string = roles[Math.floor(Math.random() * roles.length)];

      if (rol === 'student') {
        courseAsigned = courses[Math.floor(Math.random() * courses.length)];
      }

      return [rol, courseAsigned]
    } */
}
