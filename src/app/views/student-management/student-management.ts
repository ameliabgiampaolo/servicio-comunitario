import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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

    sections!: any[];
    isDropdownOpen = false;

    constructor(private appConfig: AppConfig,
                private studentService: StudentService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService,
                private el: ElementRef
    ) {
        this.groupedCourses = this.appConfig.subjects;
    }

    
  ngOnInit() {
    this.studentService.getStudent().then((data) => {
        this.students = data;
        this.allStudents = data;
        this.studentsSuggestions = data;
    });

    this.sections = [
      { label: 'Sección A', value: 'Sección A' },
      { label: 'Sección B', value: 'Sección B' },
    ];
    
    this.filterStudents();
  }

  hideDialog() {
    this.studentDialog = false;
    this.submitted = false;
  }

  saveStudent() {
    this.submitted = true;
    if (this.student.name?.trim()) {
      if (this.student.id) {
        this.students[this.findIndexById(this.student.id)] = this.student;
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Sección del estudiante actualizada',
          life: 3000,
        });
      }
      this.students = [...this.students];
      this.studentDialog = false;
      this.student = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  editUser(student: Student) {
    this.student = { ...student };
    this.studentDialog = true;
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

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.adjustDialogHeight(this.isDropdownOpen);
  }

  adjustDialogHeight(isDropdownOpen: boolean): void {
    const dialog = document.querySelector('.p-dialog') as HTMLElement;
  
    if (dialog) {
      dialog.style.height = isDropdownOpen ? '750px' : 'auto';
    }
  }

  @HostListener('document:click', ['$event.target'])
  handleClickOutside(target: HTMLElement): void {
    if (this.isDropdownOpen && !this.el.nativeElement.contains(target)) {
      this.isDropdownOpen = false;
      this.adjustDialogHeight(false);
    }
  }
}
