import { Component, OnInit } from '@angular/core';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { SubjectService } from '../../data/services/subjects/subjects.service';
export interface Section {
  section?: string;
  value?: string;
  year?: string;
}

@Component({
  selector: 'sections-management',
  templateUrl: 'sections-management.html',
  styleUrls: ['./sections-management.scss'],
  providers: [MessageService, ConfirmationService, SubjectService],
})
export class SectionsManagementComponent implements OnInit {
  groupedCourses: any;

  selectedCourse: string | undefined;

  sections!: Section[]
  section!: Section;
  selectedSections!: Section[] | null;
  allSections!: Section[]; 

  messages: Message[] | undefined;

  sectionDialog: boolean = false;
  submitted: boolean = false;

  sectionsSuggestions!: any[];

  constructor(private appConfig: AppConfig,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private subjectService: SubjectService,
  ) {
    this.groupedCourses = this.appConfig.subjects;     
  }
    
  ngOnInit() {
    this.subjectService.getSections().then((data) => {
      this.sectionsSuggestions = data;
      this.sections = data;
      this.allSections = data;
    });
  }

  filterSections() {
    if (this.selectedCourse) {
        const selectedGroup = this.groupedCourses.find(course => course.value === this.selectedCourse);
        if (selectedGroup && selectedGroup.items.length > 0) {
            this.sections = selectedGroup.items; 
        } else {
            this.sections = []; 
            this.messages = [
              { severity: 'warn', detail: 'No se encontraron secciones para el curso seleccionado.' },
            ];
        }
    } else {
        this.sections = [];
    }
  }

  openNew() {
    if (this.selectedCourse) {
      this.section = {};
      this.submitted = false;
      this.sectionDialog = true;
    }
  }

  hideDialog() {
    this.sectionDialog = false;
    this.submitted = false;
  }

  deleteSelectedSection() {
    this.confirmationService.confirm({
        message: '¿Está seguro de retirar todas las secciones del curso?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.sections = this.sections.filter(
                (val) => !this.selectedSections?.includes(val)
            );

            const selectedGroup = this.groupedCourses.find(course => course.value === this.selectedCourse);
            if (selectedGroup) {
                selectedGroup.items = selectedGroup.items.filter(
                    (item) => !this.selectedSections?.some(section => section.section === item.section)
                );
            }

            this.selectedSections = null; 
            this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Secciones retiradas',
                life: 3000,
            });
        },
        acceptLabel: 'Sí',
        rejectLabel: 'No',
    });
  }

  deleteSection(section: Section) {
    this.confirmationService.confirm({
        message: '¿Está seguro que desea desactivar la sección ' + section.section + ' del curso?',
        header: 'Confirmar',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.sections = this.sections.filter((val) => val.section !== section.section);
            this.section = {};
            const selectedGroup = this.groupedCourses.find(course => course.value === this.selectedCourse);
            if (selectedGroup) {
                selectedGroup.items = selectedGroup.items.filter(
                    (item) => item.section !== section.section
                );
            }
            this.messageService.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Sección retirada',
                life: 3000, 
            });
        },
        acceptLabel: 'Sí',
        rejectLabel: 'No',
    });
  }

  saveSections() {
    this.submitted = true;
    const sectionsArray = Array.isArray(this.section.section) ? this.section.section : Object.values(this.section.section);


    sectionsArray.forEach(section => {
        this.sections.push(section);
    });


    const selectedGroupIndex = this.groupedCourses.findIndex(course => course.value === this.selectedCourse);


    this.sections = [...this.sections];
    this.allSections = [...this.sections];
    this.groupedCourses[selectedGroupIndex].items = [...this.sections];


    this.groupedCourses[selectedGroupIndex].items.forEach((item) => {
        item.year =  this.groupedCourses[selectedGroupIndex].course; 
        if (!item.value.endsWith((selectedGroupIndex + 1).toString())) {
            item.value = item.value.split('_')[0] + '_' + item.value.split('_')[1] + '_'  + (selectedGroupIndex + 1);
        }
    });

    this.sectionDialog = false;
    this.section = {};
    
    this.messageService.add({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Asignación exitosa',
        life: 3000,
    });
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
