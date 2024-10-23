import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UsersService } from '../../data/services/users/users.service'

@Component({
  selector: 'subject-management',
  templateUrl: 'subject-management.html',
  providers: [MessageService, ConfirmationService, UsersService],
})
export class SubjectManagementComponent  {}
