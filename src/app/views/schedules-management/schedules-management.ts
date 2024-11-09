import { Component, ElementRef, OnInit } from '@angular/core';
import { SchedulesManagementService } from '../../data/services/schedules-management/schedules-management.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { ConfirmationService, MessageService } from 'primeng/api';
import { SubjectService } from '../../../app/data/services/subjects/subjects.service';

export interface Subject {
  id?: string;
  name?: string;
  hours_per_week?: number;
  hours_per_year?: number;
  course?: number;
}

  // Mapa de colores para cada materia
  const SUBJECT_COLOR_MAP = {
    'Matemática': '#ff9999', // Rojo claro
    'Inglés': '#a1f5b0',     // Verde claro
    'RECESO': '#4287f5',     // Azul (destacado)
    'Ed. Física y Deporte': '#f5c07a', // Naranja claro
    'Informática (Educ. Trab.)': '#f5ea8c', // Amarillo claro
    'Hª de Venezuela': '#b38cf5', // Púrpura claro
    'Est. de la Naturaleza': '#a1f5e5', // Turquesa claro
    'Geografía General': '#f58cc1', // Rosa claro
    'Castellano y Literatura': '#d9a1f5', // Violeta claro
    'Educación Artística': '#8ccbf5', // Celeste claro
    'Religión': '#f5aa8c', // Marrón claro
    'Ed. Familiar y Ciud.': '#a1f5d0', // Verde claro más suave,
    'Inic. Dibujo Técnico (Educ. Trab.)': '#f5b3e0', // Rosa pálido
    'Historia Universal': '#8a42f5',     // Lila claro
    'Dibujo Técnico (Educ. Trab.)': '#f542b3', // Rosa claro
    'Ciencias Biológicas': '#42f5b3',    // Verde menta
    'Educ. para la Salud': '#42a1f5',      // Azul claro
    'Física': '#42f5e3',             // Aqua claro
    'Química': '#f5b342',            // Naranja claro
    'Dibujo Técnico Aplic. (Educ. Trab.)': '#f542f5', // Rosa claro
    'Geograf. de Venezuela': '#42f5d1', // Turquesa suave
    'Hª de Venezuela (C.B.)': '#b542f5', // Púrpura claro
    'Met. Investigación': '#42a7f5',  // Azul claro
    'Dibujo Técnico': '#f5a742',      // Naranja claro
    'Francés': '#a742f5',             // Violeta claro
    'Latín y Griego': '#42f56b',      // Verde menta
    'Historia del Arte': '#f542b5',   // Rosa claro
    'Filosofía': '#f5e142',           // Amarillo suave
    'Instrucción Premilitar': '#f5427f', // Rosa fuerte
    'Ed. Física': '#f5c07a', // Naranja claro
    'Ciencias de la Tierra': '#42f5b5',  // Verde agua claro
    'Sociología': '#f5a742',            // Naranja suave
  };

@Component({
    selector: 'schedules-management',
    templateUrl: './schedules-management.html',
    styleUrls: ['./schedules-management.scss'],
    providers: [SubjectService, ConfirmationService, MessageService],
})
export class SchedulesManagement implements OnInit {
  groupedCourses: any;
  selectedCourse: string = 'seccion_a_1';

  subjects: Subject[];

  // calendar
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, interactionPlugin, bootstrap5Plugin],
    locale: 'en', // Establece inglés como idioma global
    slotMinTime: '06:00:00',
    slotMaxTime: '23:00:00',
    hiddenDays: [0, 6], // Oculta domingo y sábado
    
    headerToolbar: false, // Oculta el header completo
    dayHeaderContent: (info) => { // Personaliza el formato del día de la semana
      const dayInSpanish = new Intl.DateTimeFormat('es', { weekday: 'long' }).format(info.date);
      return dayInSpanish.charAt(0).toUpperCase() + dayInSpanish.slice(1); // Capitaliza la primera letra
    },
    themeSystem: 'standard',
    events: this.eventsFirstYear(SUBJECT_COLOR_MAP),
  };

  
  constructor(private appConfig: AppConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private el: ElementRef,
    private subjectService: SubjectService
  ) {
    this.groupedCourses = this.appConfig.subjects;
  }

  ngOnInit() {
    this.subjectService.getsubject().then((data) => {
      this.subjects = data;
    });
  };

  generateCourseEvents() {
    if (this.selectedCourse === 'seccion_b_1' || this.selectedCourse === 'seccion_a_1') {
      this.calendarOptions.events = this.eventsFirstYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_b_2' || this.selectedCourse === 'seccion_a_2') {
      this.calendarOptions.events = this.eventsSecondYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_b_3' || this.selectedCourse === 'seccion_a_3') {
      this.calendarOptions.events = this.eventsThirdYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_b_4' || this.selectedCourse === 'seccion_a_4') {
      this.calendarOptions.events = this.eventsFourthYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_b_5' || this.selectedCourse === 'seccion_a_5') {
      this.calendarOptions.events = this.eventsFiveYear(SUBJECT_COLOR_MAP);
    }

  }

  private eventsFirstYear(SUBJECT_COLOR_MAP) {
    let events;
    events = [
      //lunes
      {
        title: 'Matemática',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T08:30:00',
        end: '2024-11-04T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-04T08:55:00',
        end: '2024-11-04T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T11:05:00',
        end: '2024-11-04T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      {
        title: 'Matemática',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      //martes
      {
        title: 'Hª de Venezuela',
        start: '2024-11-05T07:00:00',
        end: '2024-11-05T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T08:30:00',
        end: '2024-11-05T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Est. de la Naturaleza',
        start: '2024-11-05T08:55:00',
        end: '2024-11-05T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza'],
        borderColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza']
      },
      {
        title: 'Geografía General',
        start: '2024-11-05T10:20:00',
        end: '2024-11-05T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geografía General'],
        borderColor: SUBJECT_COLOR_MAP['Geografía General']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T11:05:00',
        end: '2024-11-05T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Geografía General',
        start: '2024-11-05T11:30:00',
        end: '2024-11-05T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geografía General'],
        borderColor: SUBJECT_COLOR_MAP['Geografía General']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-05T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      //miercoles
      {
        title: 'Matemática',
        start: '2024-11-06T07:00:00',
        end: '2024-11-06T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T08:30:00',
        end: '2024-11-06T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inic. Dibujo Técnico (Educ. Trab.)',
        start: '2024-11-06T08:55:00',
        end: '2024-11-06T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inic. Dibujo Técnico (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Inic. Dibujo Técnico (Educ. Trab.)']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-06T10:20:00',
        end: '2024-11-06T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T11:05:00',
        end: '2024-11-06T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-06T11:30:00',
        end: '2024-11-06T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Educación Artística',
        start: '2024-11-06T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educación Artística'],
        borderColor: SUBJECT_COLOR_MAP['Educación Artística']
      },
      // jueves
      {
        title: 'Religión',
        start: '2024-11-07T07:00:00',
        end: '2024-11-07T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'Educación Artística',
        start: '2024-11-07T07:45:00',
        end: '2024-11-07T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educación Artística'],
        borderColor: SUBJECT_COLOR_MAP['Educación Artística']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T08:30:00',
        end: '2024-11-07T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Educación Artística',
        start: '2024-11-07T08:55:00',
        end: '2024-11-07T09:35:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educación Artística'],
        borderColor: SUBJECT_COLOR_MAP['Educación Artística']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-07T09:35:00',
        end: '2024-11-07T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Inglés',
        start: '2024-11-07T10:20:00',
        end: '2024-11-07T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T11:05:00',
        end: '2024-11-07T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Educación Artística',
        start: '2024-11-07T11:30:00',
        end: '2024-11-07T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educación Artística'],
        borderColor: SUBJECT_COLOR_MAP['Educación Artística']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-07T12:30:00',
        end: '2024-11-07T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      // viernes
      {
        title: 'Geografía General',
        start: '2024-11-08T07:00:00',
        end: '2024-11-08T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geografía General'],
        borderColor: SUBJECT_COLOR_MAP['Geografía General']
      },
      {
        title: 'Hª de Venezuela	',
        start: '2024-11-08T07:45:00',
        end: '2024-11-08T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T08:30:00',
        end: '2024-11-08T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Est. de la Naturaleza',
        start: '2024-11-08T08:55:00',
        end: '2024-11-08T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza'],
        borderColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza']
      },
      {
        title: 'Ed. Familiar y Ciud.',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Familiar y Ciud.'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Familiar y Ciud.']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T11:05:00',
        end: '2024-11-08T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Familiar y Ciud.',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Familiar y Ciud.'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Familiar y Ciud.']
      },
    ];

    return events;
  }
  
  private eventsSecondYear(SUBJECT_COLOR_MAP) {
    let events;
    events = [
      //lunes
      {
        title: 'Matemática',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T08:30:00',
        end: '2024-11-04T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Dibujo Técnico (Educ. Trab.)',
        start: '2024-11-04T08:55:00',
        end: '2024-11-04T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico (Educ. Trab.)']
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T11:05:00',
        end: '2024-11-04T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      {
        title: 'Educación Artística',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educación Artística'],
        borderColor: SUBJECT_COLOR_MAP['Educación Artística']
      },
      //martes
      {
        title: 'Historia Universal',
        start: '2024-11-05T07:00:00',
        end: '2024-11-05T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Historia Universal'],
        borderColor: SUBJECT_COLOR_MAP['Historia Universal']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T08:30:00',
        end: '2024-11-05T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-05T08:55:00',
        end: '2024-11-05T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Religión',
        start: '2024-11-05T10:20:00',
        end: '2024-11-05T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T11:05:00',
        end: '2024-11-05T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Educ. para la Salud',
        start: '2024-11-05T11:30:00',
        end: '2024-11-05T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educ. para la Salud'],
        borderColor: SUBJECT_COLOR_MAP['Educ. para la Salud']
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-05T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      //miercoles
      {
        title: 'Castellano y Literatura',
        start: '2024-11-06T07:00:00',
        end: '2024-11-06T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T08:30:00',
        end: '2024-11-06T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ciencias Biológicas	',
        start: '2024-11-06T08:55:00',
        end: '2024-11-06T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'Matemática',
        start: '2024-11-06T10:20:00',
        end: '2024-11-06T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T11:05:00',
        end: '2024-11-06T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Matemática',
        start: '2024-11-06T11:30:00',
        end: '2024-11-06T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Educ. para la Salud',
        start: '2024-11-06T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Educ. para la Salud'],
        borderColor: SUBJECT_COLOR_MAP['Educ. para la Salud']
      },
      // jueves
      {
        title: 'Hª de Venezuela',
        start: '2024-11-07T07:00:00',
        end: '2024-11-07T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela']
      },
      {
        title: 'Hª de Venezuela',
        start: '2024-11-07T07:45:00',
        end: '2024-11-07T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T08:30:00',
        end: '2024-11-07T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-07T08:55:00',
        end: '2024-11-07T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Inglés',
        start: '2024-11-07T10:20:00',
        end: '2024-11-07T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T11:05:00',
        end: '2024-11-07T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-07T11:30:00',
        end: '2024-11-07T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Est. de la Naturaleza	',
        start: '2024-11-07T12:30:00',
        end: '2024-11-07T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza'],
        borderColor: SUBJECT_COLOR_MAP['Est. de la Naturaleza']
      },
      // viernes
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-08T07:00:00',
        end: '2024-11-08T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-08T07:45:00',
        end: '2024-11-08T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T08:30:00',
        end: '2024-11-08T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Dibujo Técnico (Educ. Trab.)',
        start: '2024-11-08T08:55:00',
        end: '2024-11-08T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico (Educ. Trab.)']
      },
      {
        title: 'Religión',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T11:05:00',
        end: '2024-11-08T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Religión',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'Historia Universal',
        start: '2024-11-08T12:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Historia Universal'],
        borderColor: SUBJECT_COLOR_MAP['Historia Universal']
      },
    ];

    return events;
  }

  private eventsThirdYear(SUBJECT_COLOR_MAP) {
    let events;
    events = [
      //lunes
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T08:30:00',
        end: '2024-11-04T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-04T08:55:00',
        end: '2024-11-04T09:35:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Física',
        start: '2024-11-04T09:35:00',
        end: '2024-11-04T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'Religión',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T11:05:00',
        end: '2024-11-04T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Matemática',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Ed. Física y Deporte',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física y Deporte']
      },
      {
        title: 'Informática (Educ. Trab.)',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Informática (Educ. Trab.)']
      },
      //martes
      {
        title: 'Castellano y Literatura',
        start: '2024-11-05T07:00:00',
        end: '2024-11-05T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T08:30:00',
        end: '2024-11-05T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Religión',
        start: '2024-11-05T08:55:00',
        end: '2024-11-05T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'Química',
        start: '2024-11-05T10:20:00',
        end: '2024-11-05T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T11:05:00',
        end: '2024-11-05T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Química',
        start: '2024-11-05T11:30:00',
        end: '2024-11-05T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-05T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
      //miercoles
      {
        title: 'Dibujo Técnico Aplic. (Educ. Trab.)',
        start: '2024-11-06T07:00:00',
        end: '2024-11-06T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)']
      },
      {
        title: 'Química',
        start: '2024-11-06T07:45:00',
        end: '2024-11-06T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T08:30:00',
        end: '2024-11-06T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Matemática',
        start: '2024-11-06T08:55:00',
        end: '2024-11-06T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-06T10:20:00',
        end: '2024-11-06T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T11:05:00',
        end: '2024-11-06T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-06T11:30:00',
        end: '2024-11-06T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'Física',
        start: '2024-11-06T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      // jueves
      {
        title: 'Castellano y Literatura',
        start: '2024-11-07T07:00:00',
        end: '2024-11-07T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-07T07:45:00',
        end: '2024-11-07T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T08:30:00',
        end: '2024-11-07T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-07T08:55:00',
        end: '2024-11-07T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Hª de Venezuela (C.B.)',
        start: '2024-11-07T10:20:00',
        end: '2024-11-07T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela (C.B.)'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela (C.B.)']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T11:05:00',
        end: '2024-11-07T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Hª de Venezuela (C.B.)',
        start: '2024-11-07T11:30:00',
        end: '2024-11-07T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela (C.B.)'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela (C.B.)']
      },
      {
        title: 'Química',
        start: '2024-11-07T12:30:00',
        end: '2024-11-07T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      // viernes
      {
        title: 'Física',
        start: '2024-11-08T07:00:00',
        end: '2024-11-08T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'Física',
        start: '2024-11-08T07:45:00',
        end: '2024-11-08T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T08:30:00',
        end: '2024-11-08T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-08T08:55:00',
        end: '2024-11-08T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'Dibujo Técnico Aplic. (Educ. Trab.)',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T11:05:00',
        end: '2024-11-08T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Dibujo Técnico Aplic. (Educ. Trab.)',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico Aplic. (Educ. Trab.)']
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
    ];

    return events;
  }

  private eventsFourthYear(SUBJECT_COLOR_MAP) {
    let events;
    events = [
      //lunes
      {
        title: 'Química',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'Química',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T08:30:00',
        end: '2024-11-04T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Instrucción Premilitar',
        start: '2024-11-04T08:55:00',
        end: '2024-11-04T09:35:00',
        backgroundColor: SUBJECT_COLOR_MAP['Instrucción Premilitar'],
        borderColor: SUBJECT_COLOR_MAP['Instrucción Premilitar']
      },
      {
        title: 'Instrucción Premilitar',
        start: '2024-11-04T09:35:00',
        end: '2024-11-04T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Instrucción Premilitar'],
        borderColor: SUBJECT_COLOR_MAP['Instrucción Premilitar']
      },
      {
        title: 'Física',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T11:05:00',
        end: '2024-11-04T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Física',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'Matemática',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Matemática',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      //martes
      {
        title: 'Met. Investigación',
        start: '2024-11-05T07:00:00',
        end: '2024-11-05T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T08:30:00',
        end: '2024-11-05T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Historia del Arte',
        start: '2024-11-05T08:55:00',
        end: '2024-11-05T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Historia del Arte'],
        borderColor: SUBJECT_COLOR_MAP['Historia del Arte']
      },
      {
        title: 'Hª de Venezuela',
        start: '2024-11-05T10:20:00',
        end: '2024-11-05T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Hª de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Hª de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T11:05:00',
        end: '2024-11-05T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Met. Investigación',
        start: '2024-11-05T11:30:00',
        end: '2024-11-05T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
      {
        title: 'Inglés',
        start: '2024-11-05T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      //miercoles
      {
        title: 'Matemática',
        start: '2024-11-06T07:00:00',
        end: '2024-11-06T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Matemática',
        start: '2024-11-06T07:45:00',
        end: '2024-11-06T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T08:30:00',
        end: '2024-11-06T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Física',
        start: '2024-11-06T08:55:00',
        end: '2024-11-06T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física']
      },
      {
        title: 'Filosofía',
        start: '2024-11-06T10:20:00',
        end: '2024-11-06T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Filosofía'],
        borderColor: SUBJECT_COLOR_MAP['Filosofía']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T11:05:00',
        end: '2024-11-06T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Met. Investigación',
        start: '2024-11-06T11:30:00',
        end: '2024-11-06T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
      {
        title: 'Latín y Griego',
        start: '2024-11-06T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Latín y Griego'],
        borderColor: SUBJECT_COLOR_MAP['Latín y Griego']
      },
      // jueves
      {
        title: 'Francés',
        start: '2024-11-07T07:00:00',
        end: '2024-11-07T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Francés'],
        borderColor: SUBJECT_COLOR_MAP['Francés']
      },
      {
        title: 'Inglés',
        start: '2024-11-07T07:45:00',
        end: '2024-11-07T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T08:30:00',
        end: '2024-11-07T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Historia del Arte',
        start: '2024-11-07T08:55:00',
        end: '2024-11-07T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Historia del Arte'],
        borderColor: SUBJECT_COLOR_MAP['Historia del Arte']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-07T10:20:00',
        end: '2024-11-07T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T11:05:00',
        end: '2024-11-07T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Química',
        start: '2024-11-07T11:30:00',
        end: '2024-11-07T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-07T12:30:00',
        end: '2024-11-07T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      // viernes
      {
        title: 'Dibujo Técnico',
        start: '2024-11-08T07:00:00',
        end: '2024-11-08T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Dibujo Técnico'],
        borderColor: SUBJECT_COLOR_MAP['Dibujo Técnico']
      },
      {
        title: 'Química',
        start: '2024-11-08T07:45:00',
        end: '2024-11-08T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T08:30:00',
        end: '2024-11-08T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Física',
        start: '2024-11-08T08:55:00',
        end: '2024-11-08T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'Latín y Griego',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Latín y Griego'],
        borderColor: SUBJECT_COLOR_MAP['Latín y Griego']
      },
      {
        title: 'Francés',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Francés'],
        borderColor: SUBJECT_COLOR_MAP['Francés']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T11:05:00',
        end: '2024-11-08T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Filosofía',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Filosofía'],
        borderColor: SUBJECT_COLOR_MAP['Filosofía']
      },
      {
        title: 'Met. Investigación',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
    ];

    return events;
  }

  private eventsFiveYear(SUBJECT_COLOR_MAP) {
    let events;
    events = [
      //lunes
      {
        title: 'Castellano y Literatura',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-04T07:00:00',
        end: '2024-11-04T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T08:30:00',
        end: '2024-11-04T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Inglés',
        start: '2024-11-04T08:55:00',
        end: '2024-11-04T09:35:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Inglés',
        start: '2024-11-04T09:35:00',
        end: '2024-11-04T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'Matemática',
        start: '2024-11-04T10:20:00',
        end: '2024-11-04T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'RECESO',
        start: '2024-11-04T11:05:00',
        end: '2024-11-04T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ciencias Biológicas',
        start: '2024-11-04T11:30:00',
        end: '2024-11-04T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias Biológicas'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias Biológicas']
      },
      {
        title: 'Ciencias de la Tierra',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra']
      },
      {
        title: 'Ciencias de la Tierra',
        start: '2024-11-04T12:30:00',
        end: '2024-11-04T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra']
      },
      //martes
      {
        title: 'Física',
        start: '2024-11-05T07:00:00',
        end: '2024-11-05T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Física'],
        borderColor: SUBJECT_COLOR_MAP['Física']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T08:30:00',
        end: '2024-11-05T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Química',
        start: '2024-11-05T08:55:00',
        end: '2024-11-05T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-05T10:20:00',
        end: '2024-11-05T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-05T11:05:00',
        end: '2024-11-05T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Física',
        start: '2024-11-05T11:30:00',
        end: '2024-11-05T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física']
      },
      {
        title: 'Instrucción Premilitar',
        start: '2024-11-05T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Instrucción Premilitar'],
        borderColor: SUBJECT_COLOR_MAP['Instrucción Premilitar']
      },
      //miercoles
      {
        title: 'Met. Investigación',
        start: '2024-11-06T07:00:00',
        end: '2024-11-06T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
      {
        title: 'Religión',
        start: '2024-11-06T07:45:00',
        end: '2024-11-06T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T08:30:00',
        end: '2024-11-06T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Castellano y Literatura',
        start: '2024-11-06T08:55:00',
        end: '2024-11-06T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Castellano y Literatura'],
        borderColor: SUBJECT_COLOR_MAP['Castellano y Literatura']
      },
      {
        title: 'Inglés',
        start: '2024-11-06T10:20:00',
        end: '2024-11-06T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Inglés'],
        borderColor: SUBJECT_COLOR_MAP['Inglés']
      },
      {
        title: 'RECESO',
        start: '2024-11-06T11:05:00',
        end: '2024-11-06T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Matemática',
        start: '2024-11-06T11:30:00',
        end: '2024-11-06T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Francés',
        start: '2024-11-06T12:30:00',
        end: '2024-11-05T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Francés'],
        borderColor: SUBJECT_COLOR_MAP['Francés']
      },
      // jueves
      {
        title: 'Latín y Griego',
        start: '2024-11-07T07:00:00',
        end: '2024-11-07T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Latín y Griego'],
        borderColor: SUBJECT_COLOR_MAP['Latín y Griego']
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-07T07:45:00',
        end: '2024-11-07T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T08:30:00',
        end: '2024-11-07T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Sociología',
        start: '2024-11-07T08:55:00',
        end: '2024-11-07T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Sociología'],
        borderColor: SUBJECT_COLOR_MAP['Sociología']
      },
      {
        title: 'Filosofía',
        start: '2024-11-07T10:20:00',
        end: '2024-11-07T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Filosofía'],
        borderColor: SUBJECT_COLOR_MAP['Filosofía']
      },
      {
        title: 'RECESO',
        start: '2024-11-07T11:05:00',
        end: '2024-11-07T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Ed. Física',
        start: '2024-11-07T11:30:00',
        end: '2024-11-07T12:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ed. Física'],
        borderColor: SUBJECT_COLOR_MAP['Ed. Física']
      },
      {
        title: 'Instrucción Premilitar',
        start: '2024-11-07T12:30:00',
        end: '2024-11-07T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Instrucción Premilitar'],
        borderColor: SUBJECT_COLOR_MAP['Instrucción Premilitar']
      },
      // viernes
      {
        title: 'Met. Investigación',
        start: '2024-11-08T07:00:00',
        end: '2024-11-08T07:45:00',
        backgroundColor: SUBJECT_COLOR_MAP['Met. Investigación'],
        borderColor: SUBJECT_COLOR_MAP['Met. Investigación']
      },
      {
        title: 'Religión',
        start: '2024-11-08T07:45:00',
        end: '2024-11-08T08:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Religión'],
        borderColor: SUBJECT_COLOR_MAP['Religión']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T08:30:00',
        end: '2024-11-08T08:55:00',
        className: 'highlight-recess'
      },
      {
        title: 'Matemática',
        start: '2024-11-08T08:55:00',
        end: '2024-11-08T10:20:00',
        backgroundColor: SUBJECT_COLOR_MAP['Matemática'],
        borderColor: SUBJECT_COLOR_MAP['Matemática']
      },
      {
        title: 'Ciencias de la Tierra',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra'],
        borderColor: SUBJECT_COLOR_MAP['Ciencias de la Tierra']
      },
      {
        title: 'Química',
        start: '2024-11-08T10:20:00',
        end: '2024-11-08T11:05:00',
        backgroundColor: SUBJECT_COLOR_MAP['Química'],
        borderColor: SUBJECT_COLOR_MAP['Química']
      },
      {
        title: 'RECESO',
        start: '2024-11-08T11:05:00',
        end: '2024-11-08T11:30:00',
        className: 'highlight-recess'
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
      {
        title: 'Geograf. de Venezuela',
        start: '2024-11-08T11:30:00',
        end: '2024-11-08T13:30:00',
        backgroundColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela'],
        borderColor: SUBJECT_COLOR_MAP['Geograf. de Venezuela']
      },
    ];

    return events;
  }
}
