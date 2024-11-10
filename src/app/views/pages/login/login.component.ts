import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../../../app/data/services/tools/app-config.service'
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../../data/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
})
export class LoginComponent {

  icons: any;
  userForm: any;

  constructor(
    private router: Router,
    private appConfig: AppConfig,
    private loginService: LoginService
  ) {
    this.icons = this.appConfig.icons;

    this.userForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    this.loginService.saveUser(this.userForm.get('username').value)
  }
}
