import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { StudentService } from '../../data/services/student/student.service';
export interface Student {
    id?: string;
    name?: string;
    surname?: string;
    course?: string;
    section?: string;
}
@Component({
  selector: 'student-management',
  templateUrl: 'student-management.html',
  styleUrls: ['./student-management.scss'],
  providers: [MessageService, ConfirmationService, StudentService],
})
export class StudentManagementComponent implements OnInit {
    groupedCourses: any;

    selectedCourse: string | undefined;

    students!: Student[];
    student!: Student;
    selectedStudents!: Student[] | null;
    allStudents!: Student[]; 

    studentDialog: boolean = false;

    submitted: boolean = false;

    studentsSuggestions!: any[];

    constructor(private appConfig: AppConfig,
                private studentService: StudentService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService
    ) {
        this.groupedCourses = this.appConfig.subjects;     
    }

    
  ngOnInit() {
    this.studentService.getStudent().then((data) => {
        this.students = data;
        this.allStudents = data;
        this.studentsSuggestions = data;
    });
    this.filterStudents();
  }

  hideDialog() {
    this.studentDialog = false;
    this.submitted = false;
  }

  saveStudent() {
    this.submitted = true;
    const studentsArray = Array.isArray(this.student.name) ? this.student.name : Object.values(this.student.name);

    studentsArray.forEach(student => {
      student.id = this.createId();
        this.students.push(student);
    });

    this.students = [...this.students];
    this.allStudents = [...this.students];
    this.studentDialog = false;
    this.student = {};

    this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Modificación Exitosa',
        life: 3000,
    });
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

  filterStudents() {
    if (this.selectedCourse) {
      const courseValue = this.getCourseFromValue(this.selectedCourse);
      const sectionValue = this.getSectionFromValue(this.selectedCourse);
      this.students = this.allStudents.filter(student => student.course === courseValue && student.section === sectionValue);
    } else {
      this.students = [];
    }
  }

  getCourseFromValue(courseValue: string): string {
    const courseMap: { [key: string]: string } = {
      'seccion_a_1': 'Primer Año',
      'seccion_b_1': 'Primer Año',
      'seccion_a_2': 'Segundo Año',
      'seccion_b_2': 'Segundo Año',
      'seccion_a_3': 'Tercer Año',
      'seccion_b_3': 'Tercer Año',
      'seccion_a_4': 'Cuarto Año',
      'seccion_b_4': 'Cuarto Año',
      'seccion_a_5': 'Quinto Año',
      'seccion_b_5': 'Quinto Año',
    };
    return courseMap[courseValue] || '';
  }

  getSectionFromValue(courseValue: string): string {
    const courseMap: { [key: string]: string } = {
      'seccion_a_1': 'Sección A',
      'seccion_b_1': 'Sección B',
      'seccion_a_2': 'Sección A',
      'seccion_b_2': 'Sección B',
      'seccion_a_3': 'Sección A',
      'seccion_b_3': 'Sección B',
      'seccion_a_4': 'Sección A',
      'seccion_b_4': 'Sección B',
      'seccion_a_5': 'Sección A',
      'seccion_b_5': 'Sección B',
    };
    return courseMap[courseValue] || '';
  }

  openNew() {
    if (this.selectedCourse) {
      this.student = {};
      this.submitted = false;
      this.studentDialog = true;
    }
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
}
