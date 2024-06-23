import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../../data/services/grades/grades.service';

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
    providers: [GradesService],
    styles: [
        `:host ::ng-deep .p-rowgroup-footer td {
            font-weight: 700;
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
    customers!: Grade[];

    constructor(private gradesService: GradesService) {}

    ngOnInit() {
        this.gradesService.getGrades().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
      if (!this.customers) return 0;
  
      const filteredCustomers = this.customers.filter(customer => customer.representative?.name === name);
  
      const totalActivities = filteredCustomers.length;
      const totalGrade = filteredCustomers.reduce((sum, customer) => sum + Number(customer.status), 0);
  
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
}