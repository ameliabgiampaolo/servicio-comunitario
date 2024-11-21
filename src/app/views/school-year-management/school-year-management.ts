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
  date1: any;

  date2 = new Date().getFullYear().toString();

  constructor(private schoolYearService: SchoolYearService, private messageService: MessageService) {}
    
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

  saveSchoolYear() {
    this.submitted = true;

    if (this.date1 && this.date2) {
      this.date1 = this.date1.getFullYear().toString();

      const newPeriod = `${this.date1}-${this.date2.toString()}`;
      
      const exists = this.schoolYears.some((year) => year.period === newPeriod);
  
      if (!exists) {
        this.schoolYears = [{ period: newPeriod }, ...this.schoolYears];
  
        this.newSchoolYearDialog = false;
        this.schoolYear = {};
    
        this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Asignación exitosa',
            life: 3000,
        });
      } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Aviso',
            detail: `El ciclo ${newPeriod} ya existe`,
            life: 3000,
        });
      }
    }
  }
}
