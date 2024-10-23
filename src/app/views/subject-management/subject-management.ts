import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AppConfig } from '../../../app/data/services/tools/app-config.service'
import { SubjectService } from '../../../app/data/services/subjects/subjects.service';
           
export interface Subject {
    id?: string;
    name?: string;
    hours_per_week?: number;
    hours_per_year?: number;
}
@Component({
  selector: 'subject-management',
  templateUrl: 'subject-management.html',
  styleUrls: ['./subject-management.scss'],
  providers: [MessageService, ConfirmationService, SubjectService],
})
export class SubjectManagementComponent implements OnInit   {
    groupedCourses: any;

    selectedCourse: string | undefined;

    subjects!: Subject[];
    subject!: Subject;
    selectedSubjects!: Subject[] | null;

    subjectDialog: boolean = false;

    submitted: boolean = false;

    constructor(private appConfig: AppConfig,
                private subjectService: SubjectService,
                private confirmationService: ConfirmationService,
                private messageService: MessageService
    ) {
        this.groupedCourses = this.appConfig.subjects;     
    }

    
  ngOnInit() {
    this.subjectService.getsubject().then((data) => (this.subjects = data));
  }

  deleteSelectedSubjects() {
    this.confirmationService.confirm({
      message: '¿Está seguro de retirar las asignaturas del curso?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.subjects = this.subjects.filter(
          (val) => !this.selectedSubjects?.includes(val)
        );
        this.selectedSubjects = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Asignaturas retiradas',
          life: 3000,
        });
      },
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
          summary: 'Successful',
          detail: 'Asignatura retiradas',
          life: 3000,
        });
      },
    });
  }


  hideDialog() {
    this.subjectDialog = false;
    this.submitted = false;
  }

  saveSubject() {
    this.submitted = true;

    if (this.subject.name?.trim()) {
        this.subject.id = this.createId();
        this.subjects.push(this.subject);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Asignacción exitosa',
          life: 3000,
        });

      this.subjects = [...this.subjects];
      this.subjectDialog = false;
      this.subject = {};
    }
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
}
