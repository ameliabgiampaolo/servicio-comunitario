import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { SubjectService } from '../../data/services/subjects/subjects.service';
import { SchoolYearService } from '../../data/services/school-year/school-year.service';

export interface SchoolYear {
  period?: string;
}

@Component({
  selector: 'school-year-management',
  templateUrl: 'school-year-management.html',
  styleUrls: ['./school-year-management.scss'],
  providers: [MessageService, ConfirmationService, SchoolYearService],
})
export class SchoolYearManagementComponent implements OnInit {
  newSchoolYearDialog: boolean = false;
  
  schoolYears!: SchoolYear[]
  schoolYear!: SchoolYear;

  allSchoolYears!: SchoolYear[]; 

  submitted: boolean = false;

  constructor(private schoolYearService: SchoolYearService) {}
    
  ngOnInit() {
    this.schoolYearService.getSchoolYearData().then((data) => {
      this.schoolYears = data;
      this.allSchoolYears = data;
    });
  }

  openNew() {
    //this.section = {};
   // this.submitted = false;
    //this.sectionDialog = true
  }

  hideDialog() {
    this.newSchoolYearDialog = false;
    this.submitted = false;
  }
}
