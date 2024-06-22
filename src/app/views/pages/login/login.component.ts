import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../../../../app/data/services/tools/app-config.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  icons: any;

  constructor(
    private router: Router,
    private appConfig: AppConfig
  ) {
    this.icons = this.appConfig.icons;
   }

  redirectTo() {
    this.router.navigate(['/dashboard']);
  }

}
