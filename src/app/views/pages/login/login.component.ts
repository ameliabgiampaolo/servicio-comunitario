import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../../../app/data/services/tools/app-config.service'
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../../data/services/login/login.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent {
  allUsers: any;
  icons: any;
  userForm: any;
  messages: Message[] | undefined;
  
  constructor(
    private router: Router,
    private appConfig: AppConfig,
    private loginService: LoginService
  ) {
    this.icons = this.appConfig.icons;
    this.allUsers = this.appConfig.allUsers;

    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    const user = this.allUsers.find(user => user.username === this.userForm.get('username').value);

    if (user) {
      this.loginService.saveUser(user);
    } else {
      this.messages = [
        { severity: 'error', detail: 'Usuario no encontrado' },
      ];
    }
  }
}
