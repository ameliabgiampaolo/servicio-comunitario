import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { SubjectService } from '../../data/services/subjects/subjects.service';
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
  providers: [MessageService, ConfirmationService, SubjectService],
})
export class StudentManagementComponent implements OnInit   {
    groupedCourses: any;

    selectedCourse: string | undefined;

    students!: Student[];
    student!: Student;
    selectedStudents!: Student[] | null;
    allStudentd!: Student[]; 

    studentDialog: boolean = false;

    submitted: boolean = false;

    studentsSuggestions!: any[];

    constructor(private appConfig: AppConfig,
                private subjectService: SubjectService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService
    ) {
        this.groupedCourses = this.appConfig.subjects;     
    }

    
  ngOnInit() {
/*     this.subjectService.getsubject().then((data) => {
        this.subjects = data;
        this.allSubjects = data;
        this.subjectsSuggestions = data;
    });
    this.filterSubjects(); */
  }

/*   deleteSelectedSubjects() {
    this.confirmationService.confirm({
      message: '¿Está seguro de retirar todas las asignaturas del curso?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjects = this.subjects.filter(
          (val) => !this.selectedSubjects?.includes(val)
        );
        this.selectedSubjects = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Asignaturas retiradas',
          life: 3000,
        });
      },
      acceptLabel: 'Sí',   
      rejectLabel: 'No',    
    });
  }

  deleteSubject(subject: Subject) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea desactivar la asignatura ' + subject.name + ' del curso?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjects = this.subjects.filter((val) => val.id !== subject.id);
        this.subject = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Asignatura retirada',
          life: 3000,
        });
      },
      acceptLabel: 'Sí',   
      rejectLabel: 'No',    
    });
  }

  hideDialog() {
    this.subjectDialog = false;
    this.submitted = false;
  }

  saveSubject() {
    this.submitted = true;
    const subjectsArray = Array.isArray(this.subject.name) ? this.subject.name : Object.values(this.subject.name);

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

  filterSubjects() {
    if (this.selectedCourse) {
      const courseNumber = this.getCourseNumberFromValue(this.selectedCourse);
      this.subjects = this.allSubjects.filter(subject => subject.course === courseNumber);
    } else {
      this.subjects = [];
    }
  }

  getCourseNumberFromValue(courseValue: string): number {
    const courseMap: { [key: string]: number } = {
      'seccion_a_1': 1,
      'seccion_b_1': 1,
      'seccion_a_2': 2,
      'seccion_b_2': 2,
      'seccion_a_3': 3,
      'seccion_b_3': 3,
      'seccion_a_4': 4,
      'seccion_b_4': 4,
      'seccion_a_5': 5,
      'seccion_b_5': 5,
    };
    return courseMap[courseValue] || 0;
  }

  openNew() {
    if (this.selectedCourse) {
      this.subject = {};
      this.submitted = false;
      this.subjectDialog = true;
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
  } */
}
