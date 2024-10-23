import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, SelectItemGroup } from 'primeng/api';
import { UsersService } from '../../data/services/users/users.service'
import { AppConfig } from '../../../app/data/services/tools/app-config.service'

@Component({
  selector: 'subject-management',
  templateUrl: 'subject-management.html',
  styleUrls: ['./subject-management.scss'],
  providers: [MessageService, ConfirmationService, UsersService],
})
export class SubjectManagementComponent  {
    groupedCourses: any;

    selectedCourse: string | undefined;

    constructor(private appConfig: AppConfig,) {
        this.groupedCourses = this.appConfig.subjects;     
    }
}
