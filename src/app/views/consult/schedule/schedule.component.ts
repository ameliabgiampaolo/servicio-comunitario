import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../../data/services/grades/grades.service';
import { StorageService } from '../../../data/services/tools/storage.service';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { CalendarOptions } from '@fullcalendar/core';
import { SchedulesManagementService } from '../../../data/services/schedules-management/schedules-management.service';

const SUBJECT_COLOR_MAP = {
  'Matemática': '#99b3cc', // Azul claro degradado
  'Inglés': '#a0b8d6',     // Azul claro ligeramente más oscuro
  'RECESO': '#2c384af2',   // Azul original (destacado)
  'Ed. Física y Deporte': '#8ba3c5', // Azul claro intermedio
  'Informática (Educ. Trab.)': '#b3c8e1', // Azul claro suave
  'Hª de Venezuela': '#7f97b5', // Azul medio
  'Est. de la Naturaleza': '#adc3de', // Azul claro pastel
  'Geografía General': '#5f7692', // Azul más intenso para contraste
  'Castellano y Literatura': '#99acc1', // Azul claro degradado
  'Educación Artística': '#87a1bf', // Azul suave
  'Religión': '#a8bad1', // Azul pastel más claro
  'Ed. Familiar y Ciud.': '#6d8098', // Azul grisáceo intermedio
  'Inic. Dibujo Técnico (Educ. Trab.)': '#a4b5cf', // Azul claro degradado
  'Historia Universal': '#8da6c8',     // Azul suave
  'Dibujo Técnico (Educ. Trab.)': '#7f94b3', // Azul medio
  'Ciencias Biológicas': '#b0c4d8',    // Azul pastel claro
  'Educ. para la Salud': '#95b1c6',      // Azul más claro
  'Física': '#6e8ca6',             // Azul ligeramente más oscuro
  'Química': '#94afc4',            // Azul suave
  'Dibujo Técnico Aplic. (Educ. Trab.)': '#8799af', // Azul intermedio
  'Geograf. de Venezuela': '#7094b1', // Azul claro
  'Hª de Venezuela (C.B.)': '#68819e', // Azul más oscuro
  'Met. Investigación': '#94b8d1',  // Azul pastel claro
  'Dibujo Técnico': '#8ea3bc',      // Azul claro intermedio
  'Francés': '#7a96b3',             // Azul medio
  'Latín y Griego': '#9ab2c9',      // Azul más claro
  'Historia del Arte': '#8099b0',   // Azul suave
  'Filosofía': '#8eacc1',           // Azul pastel suave
  'Instrucción Premilitar': '#768b9e', // Azul intermedio
  'Ed. Física': '#a5bed3', // Azul claro
  'Ciencias de la Tierra': '#7d98b3',  // Azul medio claro
  'Sociología': '#94afc4',            // Azul pastel claro
};

@Component({
    selector: 'app-schedule',
    templateUrl: 'schedule.component.html',    
    styleUrls: ['./schedule.component.scss'],
    providers: [GradesService, SchedulesManagementService],
})
export class ScheduleComponent implements OnInit{
  selectedCourse: string;

  // calendar
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    plugins: [timeGridPlugin, interactionPlugin, bootstrap5Plugin],
    locale: 'en', // Establece inglés como idioma global
    slotMinTime: '06:00:00',
    slotMaxTime: '23:00:00',
    hiddenDays: [0, 6], // Oculta domingo y sábado
    initialDate: '2024-11-04T05:00:00', // Fecha de inicio predefinida    
    headerToolbar: false, // Oculta el header completo
    dayHeaderContent: (info) => { // Personaliza el formato del día de la semana
      const dayInSpanish = new Intl.DateTimeFormat('es', { weekday: 'long' }).format(info.date);
       return dayInSpanish.charAt(0).toUpperCase() + dayInSpanish.slice(1); // Capitaliza la primera letra
    },
    themeSystem: 'standard',
    events: [],
  };

  constructor(
    private storageService: StorageService,
    private schedulesManagementService: SchedulesManagementService
  ) {
    this.selectedCourse = this.storageService.getSavedUser().course;
  }

  ngOnInit() {
    if (this.selectedCourse === 'seccion_a_1' || this.selectedCourse === 'seccion_b_1' || this.selectedCourse === 'seccion_c_1' || 
      this.selectedCourse === 'seccion_d_1' || this.selectedCourse === 'seccion_e_1') {
        this.calendarOptions.events = this.schedulesManagementService.eventsFirstYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_a_2' || this.selectedCourse === 'seccion_b_2' || this.selectedCourse === 'seccion_c_2' || 
      this.selectedCourse === 'seccion_d_2' || this.selectedCourse === 'seccion_e_2') {
      this.calendarOptions.events = this.schedulesManagementService.eventsSecondYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_a_3' || this.selectedCourse === 'seccion_b_3' || this.selectedCourse === 'seccion_c_3' || 
      this.selectedCourse === 'seccion_d_3' || this.selectedCourse === 'seccion_e_3') {
      this.calendarOptions.events = this.schedulesManagementService.eventsThirdYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_a_4' || this.selectedCourse === 'seccion_b_4' || this.selectedCourse === 'seccion_c_4' || 
      this.selectedCourse === 'seccion_d_4' || this.selectedCourse === 'seccion_e_4') {
      this.calendarOptions.events = this.schedulesManagementService.eventsFourthYear(SUBJECT_COLOR_MAP);
    } else if (this.selectedCourse === 'seccion_a_5' || this.selectedCourse === 'seccion_b_5' || this.selectedCourse === 'seccion_c_5' || 
      this.selectedCourse === 'seccion_d_5' || this.selectedCourse === 'seccion_e_5') {
      this.calendarOptions.events = this.schedulesManagementService.eventsFiveYear(SUBJECT_COLOR_MAP);
    }
  }
  
  public getCourse(): string {
    switch (this.selectedCourse) {
      case 'seccion_a_1':
        return 'Primer Año - Sección A';
      case 'seccion_b_1':
        return 'Primer Año - Sección B';
      case 'seccion_c_1':
        return 'Primer Año - Sección C';
      case 'seccion_d_1':
        return 'Primer Año - Sección D';
      case 'seccion_e_1':
        return 'Primer Año - Sección E';
      case 'seccion_a_2':
        return 'Segundo Año - Sección A';
      case 'seccion_b_2':
        return 'Segundo Año - Sección B';
      case 'seccion_c_2':
        return 'Segundo Año - Sección C';
      case 'seccion_d_2':
        return 'Segundo Año - Sección D';
      case 'seccion_e_2':
        return 'Segundo Año - Sección E';
      case 'seccion_a_3':
        return 'Tercer Año - Sección A';
      case 'seccion_b_3':
        return 'Tercer Año - Sección B';
      case 'seccion_c_3':
        return 'Tercer Año - Sección C';
      case 'seccion_d_3':
        return 'Tercer Año - Sección D';
      case 'seccion_e_3':
        return 'Tercer Año - Sección E';
      case 'seccion_a_4':
        return 'Cuarto Año - Sección A';
      case 'seccion_b_4':
        return 'Cuarto Año - Sección B';
      case 'seccion_c_4':
        return 'Cuarto Año - Sección C';
      case 'seccion_d_4':
        return 'Cuarto Año - Sección D';
      case 'seccion_e_4':
        return 'Cuarto Año - Sección E';
      case 'seccion_a_5':
        return 'Quinto Año - Sección A';
      case 'seccion_b_5':
        return 'Quinto Año - Sección B';
      case 'seccion_c_5':
        return 'Quinto Año - Sección C';
      case 'seccion_d_5':
        return 'Quinto Año - Sección D';
      case 'seccion_e_5':
        return 'Quinto Año - Sección E';
      default:
        return 'Curso no encontrado';
    }
  }  
}