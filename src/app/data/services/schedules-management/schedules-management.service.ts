import { Injectable } from '@angular/core';
@Injectable()
export class SchedulesManagementService {
    getData() {
        return [
            { id: 1, title: 'All Day Event', start: '2017-02-01' },
            { id: 2, title: 'Long Event', start: '2017-02-07', end: '2017-02-10' },
            { id: 3, title: 'Repeating Event', start: '2017-02-09T16:00:00' },
            { id: 4, title: 'Repeating Event', start: '2017-02-16T16:00:00' },
            { id: 5, title: 'Conference', start: '2017-02-11', end: '2017-02-13' },
            { id: 6, title: 'Meeting', start: '2017-02-12T10:30:00', end: '2017-02-12T12:30:00' },
            { id: 7, title: 'Lunch', start: '2017-02-12T12:00:00' },
            { id: 8, title: 'Meeting', start: '2017-02-12T14:30:00' },
            { id: 9, title: 'Happy Hour', start: '2017-02-12T17:30:00' },
            { id: 10, title: 'Dinner', start: '2017-02-12T20:00:00' },
            { id: 11, title: 'Birthday Party', start: '2017-02-13T07:00:00' },
            { id: 12, title: 'Click for Google', url: 'https://www.google.com/', start: '2017-02-28' },
        ];
    }

    getEvents() {
        return Promise.resolve(this.getData());
    }

    public eventsFirstYear(SUBJECT_COLOR_MAP) {
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
      
    public eventsSecondYear(SUBJECT_COLOR_MAP) {
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
    
    public eventsThirdYear(SUBJECT_COLOR_MAP) {
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
    
    public eventsFourthYear(SUBJECT_COLOR_MAP) {
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
    
    public eventsFiveYear(SUBJECT_COLOR_MAP) {
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