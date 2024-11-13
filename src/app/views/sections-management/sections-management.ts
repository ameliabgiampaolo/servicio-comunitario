import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppConfig } from '../../../app/data/services/tools/app-config.service'
import { SubjectService } from '../../../app/data/services/subjects/subjects.service';

@Component({
  selector: 'sections-management',
  templateUrl: 'sections-management.html',
  styleUrls: ['./sections-management.scss'],
  providers: [MessageService, ConfirmationService, SubjectService],
})
export class SectionsManagementComponent implements OnInit   {
    constructor() {}
    
    ngOnInit() {}
}
