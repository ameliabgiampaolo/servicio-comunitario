import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersService } from '../../data/services/users/users.service'
export interface User {
    id?: string;
    name?: string;
    inventoryStatus?: string;
    category?: string;
}

@Component({
  selector: 'user-management',
  templateUrl: 'user-management.html',
  providers: [MessageService, ConfirmationService, UsersService],
  styles: [
    `:host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }`,
  ],
})
export class UserManagementComponent implements OnInit {
  userDialog: boolean = false;

  users!: User[];

  user!: User;

  selectedUsers!: User[] | null;

  submitted: boolean = false;

  statuses!: any[];

  constructor(
    private usersService: UsersService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().then((data) => (this.users = data));

    this.statuses = [
      { label: 'ACTIVO', value: 'activo' },
      { label: 'INACTIVO', value: 'inactivo' },
      { label: 'BLOQUEADO', value: 'bloqueado' },
    ];
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: '¿Está seguro de desactivar a todos los usuarios?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(
          (val) => !this.selectedUsers?.includes(val)
        );
        this.selectedUsers = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Usuarios desactivados',
          life: 3000,
        });
      },
    });
  }

  editUser(user: User) {
    this.user = { ...user };
    this.userDialog = true;
  }

  deleteUser(user: User) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea desactivar al usuario ' + user.name + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter((val) => val.id !== user.id);
        this.user = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Usuario desactivado',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  saveUser() {
    this.submitted = true;

    if (this.user.name?.trim()) {
      if (this.user.id) {
        this.users[this.findIndexById(this.user.id)] = this.user;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Usuario actualizado',
          life: 3000,
        });
      } else {
        this.user.id = this.createId();
        this.users.push(this.user);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Usuario creado',
          life: 3000,
        });
      }

      this.users = [...this.users];
      this.userDialog = false;
      this.user = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'ACTIVO':
        return 'success';
      case 'BLOQUEADO':
        return 'warning';
      case 'INACTIVO':
        return 'danger';
    }
  }
}
