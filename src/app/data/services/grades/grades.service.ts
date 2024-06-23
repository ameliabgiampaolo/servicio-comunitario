import { Injectable } from '@angular/core';

@Injectable()
export class GradesService {
  getData() {
    return [
      // matemática
      {
        id: 1000,
        name: 'Taller I',
        date: '06-01-2024',
        status: '05',
        representative: {
          name: 'Matemática',
        },
      },
      {
        id: 2000,
        name: 'Trabajo corto',
        date: '12-02-2024',
        status: '10',
        representative: {
          name: 'Matemática',
        },
      },
      {
        id: 3000,
        name: 'Taller II',
        date: '06-03-2024',
        status: '13',
        representative: {
          name: 'Matemática',
        },
      },

      // historia
      {
        id: 4000,
        name: 'Exámen I',
        date: '07-01-2024',
        status: '10',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 5000,
        name: 'Exposición I',
        date: '10-02-2024',
        status: '17',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 6000,
        name: 'Exposición II',
        date: '20-02-2024',
        status: '16',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 7000,
        name: 'Maqueta',
        date: '04-03-2024',
        status: '20',
        representative: {
          name: 'Historia',
        },
      },

      // biología
      {
        id: 8000,
        name: 'Exámen I',
        date: '10-01-2024',
        status: '07',
        representative: {
          name: 'Biología',
        },
      },
      {
        id: 9000,
        name: 'Exámen II',
        date: '10-02-2024',
        status: '09',
        representative: {
          name: 'Biología',
        },
      },
      {
        id: 10000,
        name: 'Exámen III',
        date: '20-02-2024',
        status: '13',
        representative: {
          name: 'Biología',
        },
      },

      // química
      {
        id: 11000,
        name: 'Laboratorio I',
        date: '15-01-2024',
        status: '12',
        representative: {
          name: 'Química',
        },
      },
      {
        id: 12000,
        name: 'Exámen I',
        date: '25-02-2024',
        status: '18',
        representative: {
          name: 'Química',
        },
      },
      {
        id: 13000,
        name: 'Trabajo en grupo',
        date: '05-03-2024',
        status: '15',
        representative: {
          name: 'Química',
        },
      },

      // física
      {
        id: 14000,
        name: 'Práctica I',
        date: '10-01-2024',
        status: '10',
        representative: {
          name: 'Física',
        },
      },
      {
        id: 15000,
        name: 'Exámen I',
        date: '12-02-2024',
        status: '12',
        representative: {
          name: 'Física',
        },
      },
      {
        id: 16000,
        name: 'Laboratorio',
        date: '18-03-2024',
        status: '14',
        representative: {
          name: 'Física',
        },
      },

      // inglés
      {
        id: 17000,
        name: 'Examen Oral I',
        date: '08-01-2024',
        status: '16',
        representative: {
          name: 'Inglés',
        },
      },
      {
        id: 18000,
        name: 'Ensayo',
        date: '18-02-2024',
        status: '14',
        representative: {
          name: 'Inglés',
        },
      },
      {
        id: 19000,
        name: 'Examen Final',
        date: '22-03-2024',
        status: '18',
        representative: {
          name: 'Inglés',
        },
      },

      // literatura
      {
        id: 20000,
        name: 'Ensayo Literario',
        date: '10-01-2024',
        status: '15',
        representative: {
          name: 'Literatura',
        },
      },
      {
        id: 21000,
        name: 'Lectura Crítica',
        date: '14-02-2024',
        status: '12',
        representative: {
          name: 'Literatura',
        },
      },
      {
        id: 22000,
        name: 'Exposición',
        date: '24-03-2024',
        status: '17',
        representative: {
          name: 'Literatura',
        },
      },

      // geografía
      {
        id: 23000,
        name: 'Mapa Conceptual',
        date: '05-01-2024',
        status: '14',
        representative: {
          name: 'Geografía',
        },
      },
      {
        id: 24000,
        name: 'Proyecto de Investigación',
        date: '20-02-2024',
        status: '19',
        representative: {
          name: 'Geografía',
        },
      },
      {
        id: 25000,
        name: 'Exámen Final',
        date: '15-03-2024',
        status: '18',
        representative: {
          name: 'Geografía',
        },
      },

      // educación física
      {
        id: 26000,
        name: 'Evaluación Física I',
        date: '12-01-2024',
        status: '20',
        representative: {
          name: 'Educación Física',
        },
      },
      {
        id: 27000,
        name: 'Prueba de Resistencia',
        date: '22-02-2024',
        status: '17',
        representative: {
          name: 'Educación Física',
        },
      },
      {
        id: 28000,
        name: 'Torneo Deportivo',
        date: '25-03-2024',
        status: '19',
        representative: {
          name: 'Educación Física',
        },
      },

      // arte
      {
        id: 29000,
        name: 'Dibujo I',
        date: '07-01-2024',
        status: '18',
        representative: {
          name: 'Arte',
        },
      },
      {
        id: 30000,
        name: 'Pintura',
        date: '28-02-2024',
        status: '16',
        representative: {
          name: 'Arte',
        },
      },
      {
        id: 31000,
        name: 'Exposición de Arte',
        date: '20-03-2024',
        status: '20',
        representative: {
          name: 'Arte',
        },
      },

      // música
      {
        id: 32000,
        name: 'Concierto',
        date: '11-01-2024',
        status: '19',
        representative: {
          name: 'Música',
        },
      },
      {
        id: 33000,
        name: 'Composición Musical',
        date: '15-02-2024',
        status: '18',
        representative: {
          name: 'Música',
        },
      },
      {
        id: 34000,
        name: 'Examen Práctico',
        date: '28-03-2024',
        status: '17',
        representative: {
          name: 'Música',
        },
      },

      // informática
      {
        id: 35000,
        name: 'Proyecto de Software',
        date: '20-01-2024',
        status: '20',
        representative: {
          name: 'Informática',
        },
      },
      {
        id: 36000,
        name: 'Exámen Teórico',
        date: '25-02-2024',
        status: '16',
        representative: {
          name: 'Informática',
        },
      },
      {
        id: 37000,
        name: 'Taller de Programación',
        date: '30-03-2024',
        status: '18',
        representative: {
          name: 'Informática',
        },
      },
    ];
  }

  getGrades() {
    return Promise.resolve(this.getData());
  }
}
