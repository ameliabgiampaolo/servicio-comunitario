import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { SubjectService } from '../../data/services/subjects/subjects.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'school-year-management',
  templateUrl: 'school-year-management.html',
  styleUrls: ['./school-year-management.scss'],
  providers: [MessageService, ConfirmationService, SubjectService],
})
export class SchoolYearManagementComponent implements OnInit {


  constructor(
  ) {
  }
    
  ngOnInit() {

  }
}
