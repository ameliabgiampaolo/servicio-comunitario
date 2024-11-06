import { Component, ElementRef, OnInit } from '@angular/core';
import { SchedulesManagementService } from '../../data/services/schedules-management/schedules-management.service';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { AppConfig } from '../../data/services/tools/app-config.service'
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
    selector: 'schedules-management',
    templateUrl: './schedules-management.html',
    styleUrls: ['./schedules-management.scss'],
    providers: [SchedulesManagementService, ConfirmationService, MessageService],
})
export class SchedulesManagement implements OnInit {
  groupedCourses: any;
  selectedCourse: string | undefined;

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
    dateClick: (arg) => this.handleDateClick(arg),
    events: [
      { title: 'Evento 1', date: '2024-11-04T07:00:00' },
      { title: 'Evento 2', date: '2024-11-05T09:00:00' }
    ]
  };

  
  constructor(private appConfig: AppConfig,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private el: ElementRef
  ) {
    this.groupedCourses = this.appConfig.subjects;
  }

  ngOnInit() {};

  handleDateClick(arg) {
    alert('¡Fecha seleccionada! ' + arg.dateStr);
  }
}
