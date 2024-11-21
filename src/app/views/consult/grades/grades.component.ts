import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../../data/services/grades/grades.service';
import { SchoolYearService } from '../../../data/services/school-year/school-year.service';
import { MessageService } from 'primeng/api';

export interface Subject {
  name?: string;
}

export interface Grade {
  id?: number;
  name?: string;
  date?: string | Date;
  status?: string;
  representative?: Subject;
}

@Component({
    selector: 'app-grades',
    templateUrl: 'grades.component.html',
    providers: [GradesService, SchoolYearService, MessageService],
    styles: [
        `:host ::ng-deep .p-rowgroup-footer td {
            font-weight: 700;
        }

        ::ng-deep .p-dropdown-panel .p-dropdown-items {
          margin-left: 0 !important;
        }

          ::ng-deep .p-dropdown-item {
              padding-left: 0.5rem !important;
          }

          ::ng-deep .p-dropdown-panel ul, 
          ::ng-deep .p-dropdown-panel ol { 
              padding-left: 0 !important;
          }

          .login-messages {
              position: absolute;
              top: 0;
              left: 50%;
              transform: translateX(-50%);
              z-index: 1050; 
              width: auto;
              max-width: 90%;
              margin: 0 auto;
          }
        
        :host ::ng-deep .p-rowgroup-header {
            span {
                font-weight: 700;
            }
        
            .p-row-toggler {
                vertical-align: middle;
                margin-right: .25rem;
            }
        }`
    ],
})
export class GradesComponent implements OnInit{
    grades!: Grade[];
    schoolYears: any;
    selectedSchoolYear: any;

    constructor(private gradesService: GradesService, private schoolYearService: SchoolYearService) {
      this.schoolYearService.getSchoolYearData().then((data) => {
        this.schoolYears = data;
      });    
    }

    ngOnInit() {
      this.gradesService.getGrades().then((data) => {
          this.grades = data;
      });
      this.schoolYearService.getSchoolYearData().then((data) => {
        this.schoolYears = data;
        this.selectedSchoolYear = this.schoolYears[0]; 
        this.filterGrades(); 
      });
    }

    calculateCustomerTotal(name: string) {
      if (!this.grades) return 0;
  
      const filteredGrades = this.grades.filter(customer => customer.representative?.name === name);
  
      const totalActivities = filteredGrades.length;
      const totalGrade = filteredGrades.reduce((sum, customer) => sum + Number(customer.status), 0);
  
      return totalActivities > 0 ? (totalGrade / totalActivities).toFixed(2) : "0.00";
  }
  

    getSeverity(status: string) {
      const grade = Number(status);

      if (grade < 10 ) {
        return 'danger'
      } else if (grade >= 10) {
        return 'success'
      }
    }

    
    filterGrades() {
      if (this.selectedSchoolYear.period) {
        this.gradesService.getGrades().then((data) => {
          this.grades = data.filter((grade) => grade.schoolYear === this.selectedSchoolYear.period.toString());
        });
      } else {
        this.gradesService.getGrades().then((data) => {
          this.grades = data; 
        });
      }
    }
}