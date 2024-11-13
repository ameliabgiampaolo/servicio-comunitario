import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
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

  date: Date[] | undefined;

  date2 = new Date().getFullYear().toString();

  constructor(private schoolYearService: SchoolYearService) {}
    
  ngOnInit() {
    this.schoolYearService.getSchoolYearData().then((data) => {
      this.schoolYears = data;
      this.allSchoolYears = data;
    });
  }

  openNew() {
    this.schoolYear = {};
    this.submitted = false;
    this.newSchoolYearDialog = true
  }

  hideDialog() {
    this.newSchoolYearDialog = false;
    this.submitted = false;
  }

  adjustDialogHeight(isDropdownOpen: boolean): void {
    const dialog = document.querySelector('.p-dialog') as HTMLElement;
  
    if (dialog) {
      if (isDropdownOpen) {
        dialog.style.height = '500px';
      } else {
        dialog.style.height = 'auto';
      }
    }
  }

  updateMaxYear(date1) {
    this.date2 = (Number(date1.getFullYear()) + 1).toString();
  }

  saveSubject() {
    this.submitted = true;
    const period = this.schoolYear.period;
/* 
    subjectsArray.forEach(subject => {
        subject.id = this.createId();
        this.subjects.push(subject);
    });

    this.subjects = [...this.subjects];
    this.allSubjects = [...this.subjects];
    this.subjectDialog = false;
    this.subject = {};

    this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Asignación exitosa',
        life: 3000,
    }); */
  }

}
