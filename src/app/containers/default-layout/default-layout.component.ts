import { Component, OnInit } from '@angular/core';
import { navItems } from './_nav';
import { StorageService } from '../../data/services/tools/storage.service';
import { LoginService } from '../../data/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = [];

  constructor(private storageService: StorageService, private loginService: LoginService) {}

  ngOnInit() {
    this.updateNavItems(); // Initial call in case user data is already in storage
    // Subscribe to changes in user data
    this.loginService.userSubject$.subscribe(() => {
      this.updateNavItems();
    });
  }

  private updateNavItems() {
    const userRole = this.storageService.getSavedUser()?.rol;
    if (userRole === 'admin') {
      this.navItems = navItems;
    } else if (userRole === 'teacher') {
      this.navItems = navItems.filter(item => item.name === 'Docentes' || item.name === 'Administración Escolar' || item.name === 'Inicio');
    } else if (userRole === 'student') {
      this.navItems = navItems.filter(item => item.name === 'Alumnos' || item.name === 'Consultas' || item.name === 'Inicio');
    } else {
      this.navItems = [];
    }
  }
}
