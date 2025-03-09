import { Injectable } from '@angular/core';

@Injectable()
export class GradesService {
  private grades = this.getData(); 

  getData() {
    return [
       // matemática
       {
        id: 1010,
        name: 'Taller Avanzado',
        date: '15-01-2024',
        status: '08',
        schoolYear: '2024-2025',
        representative: {
          name: 'Matemática',
        },
        username: 'ycontreras',
      },
      {
        id: 1020,
        name: 'Exámen Semestral',
        date: '20-02-2024',
        status: '12',
        schoolYear: '2024-2025',
        representative: {
          name: 'Matemática',
        },
        username: 'ycontreras',
      },

      // historia
      {
        id: 2010,
        name: 'Investigación Documental',
        date: '10-01-2024',
        status: '14',
        schoolYear: '2024-2025',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 2020,
        name: 'Debate Histórico',
        date: '15-03-2024',
        status: '16',
        schoolYear: '2024-2025',
        representative: {
          name: 'Historia',
        },
        username: 'ycontreras',
      },

      // religion
      {
        id: 2020,
        name: 'Presentación Oral',
        date: '09-03-2025',
        status: '14',
        schoolYear: '2024-2025',
        representative: {
          name: 'Religión IV',
        },
        username: 'ycontreras',
      },
      
       // matemática
       {
        id: 1010,
        name: 'Taller Avanzado',
        date: '15-01-2023',
        status: '09',
        schoolYear: '2022-2023',
        representative: {
          name: 'Matemática',
        },
      },
      {
        id: 1020,
        name: 'Exámen Semestral',
        date: '20-02-2023',
        status: '12',
        schoolYear: '2022-2023',
        representative: {
          name: 'Matemática',
        },
      },

      // historia
      {
        id: 2010,
        name: 'Investigación Documental',
        date: '10-01-2023',
        status: '14',
        schoolYear: '2022-2023',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 2020,
        name: 'Debate Histórico',
        date: '15-03-2023',
        status: '16',
        schoolYear: '2022-2023',
        representative: {
          name: 'Historia',
        },
      },

      // biología
      {
        id: 3010,
        name: 'Práctica de Laboratorio',
        date: '25-01-2023',
        status: '13',
        schoolYear: '2022-2023',
        representative: {
          name: 'Biología',
        },
      },
      {
        id: 3020,
        name: 'Proyecto Ambiental',
        date: '12-03-2023',
        status: '17',
        schoolYear: '2022-2023',
        representative: {
          name: 'Biología',
        },
      },

      // química
      {
        id: 4010,
        name: 'Taller de Química',
        date: '18-02-2023',
        status: '11',
        schoolYear: '2022-2023',
        representative: {
          name: 'Química',
        },
      },
      {
        id: 4020,
        name: 'Exposición Científica',
        date: '28-03-2023',
        status: '18',
        schoolYear: '2022-2023',
        representative: {
          name: 'Química',
        },
      },

      // inglés
      {
        id: 5010,
        name: 'Presentación Oral',
        date: '14-02-2023',
        status: '15',
        schoolYear: '2022-2023',
        representative: {
          name: 'Inglés',
        },
      },
      {
        id: 5020,
        name: 'Proyecto Cultural',
        date: '30-03-2023',
        status: '20',
        schoolYear: '2022-2023',
        representative: {
          name: 'Inglés',
        },
      },

      // arte
      {
        id: 6010,
        name: 'Escultura Básica',
        date: '05-01-2023',
        status: '18',
        schoolYear: '2022-2023',
        representative: {
          name: 'Arte',
        },
      },
      {
        id: 6020,
        name: 'Exposición Colectiva',
        date: '22-03-2023',
        status: '19',
        schoolYear: '2022-2023',
        representative: {
          name: 'Arte',
        },
      },

      // música
      {
        id: 7010,
        name: 'Taller de Guitarra',
        date: '12-02-2023',
        status: '14',
        schoolYear: '2022-2023',
        representative: {
          name: 'Música',
        },
      },
      {
        id: 7020,
        name: 'Concierto Final',
        date: '28-03-2023',
        status: '20',
        schoolYear: '2022-2023',
        representative: {
          name: 'Música',
        },
      },

      // informática
      {
        id: 8010,
        name: 'Diseño de Página Web',
        date: '18-01-2023',
        status: '19',
        schoolYear: '2022-2023',
        representative: {
          name: 'Informática',
        },
      },
      {
        id: 8020,
        name: 'Simulación Computacional',
        date: '10-03-2023',
        status: '16',
        schoolYear: '2022-2023',
        representative: {
          name: 'Informática',
        },
      },
      // matemática
      {
        id: 1000,
        name: 'Taller I',
        date: '06-01-2024',
        status: '05',
        schoolYear: '2023-2024',
        representative: {
          name: 'Matemática',
        },
      },
      {
        id: 2000,
        name: 'Trabajo corto',
        date: '12-02-2024',
        status: '10',
        schoolYear: '2023-2024',
        representative: {
          name: 'Matemática',
        },
      },
      {
        id: 3000,
        name: 'Taller II',
        date: '06-03-2024',
        status: '13',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 5000,
        name: 'Exposición I',
        date: '10-02-2024',
        status: '17',
        schoolYear: '2023-2024',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 6000,
        name: 'Exposición II',
        date: '20-02-2024',
        status: '16',
        schoolYear: '2023-2024',
        representative: {
          name: 'Historia',
        },
      },
      {
        id: 7000,
        name: 'Maqueta',
        date: '04-03-2024',
        status: '20',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Biología',
        },
      },
      {
        id: 9000,
        name: 'Exámen II',
        date: '10-02-2024',
        status: '09',
        schoolYear: '2023-2024',
        representative: {
          name: 'Biología',
        },
      },
      {
        id: 10000,
        name: 'Exámen III',
        date: '20-02-2024',
        status: '13',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Química',
        },
      },
      {
        id: 12000,
        name: 'Exámen I',
        date: '25-02-2024',
        status: '18',
        schoolYear: '2023-2024',
        representative: {
          name: 'Química',
        },
      },
      {
        id: 13000,
        name: 'Trabajo en grupo',
        date: '05-03-2024',
        status: '15',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Física',
        },
      },
      {
        id: 15000,
        name: 'Exámen I',
        date: '12-02-2024',
        status: '12',
        schoolYear: '2023-2024',
        representative: {
          name: 'Física',
        },
      },
      {
        id: 16000,
        name: 'Laboratorio',
        date: '18-03-2024',
        status: '14',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Inglés',
        },
      },
      {
        id: 18000,
        name: 'Ensayo',
        date: '18-02-2024',
        status: '14',
        schoolYear: '2023-2024',
        representative: {
          name: 'Inglés',
        },
      },
      {
        id: 19000,
        name: 'Examen Final',
        date: '22-03-2024',
        status: '18',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Literatura',
        },
      },
      {
        id: 21000,
        name: 'Lectura Crítica',
        date: '14-02-2024',
        status: '12',
        schoolYear: '2023-2024',
        representative: {
          name: 'Literatura',
        },
      },
      {
        id: 22000,
        name: 'Exposición',
        date: '24-03-2024',
        status: '17',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Geografía',
        },
      },
      {
        id: 24000,
        name: 'Proyecto de Investigación',
        date: '20-02-2024',
        status: '19',
        schoolYear: '2023-2024',
        representative: {
          name: 'Geografía',
        },
      },
      {
        id: 25000,
        name: 'Exámen Final',
        date: '15-03-2024',
        status: '18',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Educación Física',
        },
      },
      {
        id: 27000,
        name: 'Prueba de Resistencia',
        date: '22-02-2024',
        status: '17',
        schoolYear: '2023-2024',
        representative: {
          name: 'Educación Física',
        },
      },
      {
        id: 28000,
        name: 'Torneo Deportivo',
        date: '25-03-2024',
        status: '19',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Arte',
        },
      },
      {
        id: 30000,
        name: 'Pintura',
        date: '28-02-2024',
        status: '16',
        schoolYear: '2023-2024',
        representative: {
          name: 'Arte',
        },
      },
      {
        id: 31000,
        name: 'Exposición de Arte',
        date: '20-03-2024',
        status: '20',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Música',
        },
      },
      {
        id: 33000,
        name: 'Composición Musical',
        date: '15-02-2024',
        status: '18',
        schoolYear: '2023-2024',
        representative: {
          name: 'Música',
        },
      },
      {
        id: 34000,
        name: 'Examen Práctico',
        date: '28-03-2024',
        status: '17',
        schoolYear: '2023-2024',
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
        schoolYear: '2023-2024',
        representative: {
          name: 'Informática',
        },
      },
      {
        id: 36000,
        name: 'Exámen Teórico',
        date: '25-02-2024',
        status: '16',
        schoolYear: '2023-2024',
        representative: {
          name: 'Informática',
        },
      },
      {
        id: 37000,
        name: 'Taller de Programación',
        date: '30-03-2024',
        status: '18',
        schoolYear: '2023-2024',
        representative: {
          name: 'Informática',
        },
      },
            // filosofía
      {
        id: 101,
        name: 'Ensayo Filosófico',
        date: '20-01-2022',
        status: '08',
        schoolYear: '2021-2022',
        representative: {
          name: 'Filosofía',
        },
      },
      {
        id: 102,
        name: 'Debate Ético',
        date: '10-02-2022',
        status: '07',
        schoolYear: '2021-2022',
        representative: {
          name: 'Filosofía',
        },
      },

      // sociología
      {
        id: 201,
        name: 'Proyecto Comunitario',
        date: '25-01-2022',
        status: '14',
        schoolYear: '2021-2022',
        representative: {
          name: 'Sociología',
        },
      },
      {
        id: 202,
        name: 'Estudio de Caso',
        date: '15-03-2022',
        status: '12',
        schoolYear: '2021-2022',
        representative: {
          name: 'Sociología',
        },
      },

      // tecnología
      {
        id: 301,
        name: 'Diseño de Prototipos',
        date: '30-01-2022',
        status: '16',
        schoolYear: '2021-2022',
        representative: {
          name: 'Tecnología',
        },
      },
      {
        id: 302,
        name: 'Taller de Innovación',
        date: '28-03-2022',
        status: '18',
        schoolYear: '2021-2022',
        representative: {
          name: 'Tecnología',
        },
      },

      // economía
      {
        id: 401,
        name: 'Análisis Financiero',
        date: '12-02-2022',
        status: '09',
        schoolYear: '2021-2022',
        representative: {
          name: 'Economía',
        },
      },
      {
        id: 402,
        name: 'Estudio de Mercados',
        date: '15-03-2022',
        status: '15',
        schoolYear: '2021-2022',
        representative: {
          name: 'Economía',
        },
      },

      // educación cívica
      {
        id: 501,
        name: 'Simulación Parlamentaria',
        date: '18-01-2022',
        status: '06',
        schoolYear: '2021-2022',
        representative: {
          name: 'Educación Cívica',
        },
      },
      {
        id: 502,
        name: 'Foro de Derechos Humanos',
        date: '20-02-2022',
        status: '08',
        schoolYear: '2021-2022',
        representative: {
          name: 'Educación Cívica',
        },
      },

      // artes escénicas
      {
        id: 601,
        name: 'Obra Teatral',
        date: '05-02-2022',
        status: '17',
        schoolYear: '2021-2022',
        representative: {
          name: 'Artes Escénicas',
        },
      },
      {
        id: 602,
        name: 'Presentación Coreográfica',
        date: '10-03-2022',
        status: '20',
        schoolYear: '2021-2022',
        representative: {
          name: 'Artes Escénicas',
        },
      },

      // educación ambiental
      {
        id: 701,
        name: 'Taller de Reciclaje',
        date: '18-01-2022',
        status: '09',
        schoolYear: '2021-2022',
        representative: {
          name: 'Educación Ambiental',
        },
      },
      {
        id: 702,
        name: 'Campaña Ecológica',
        date: '20-03-2022',
        status: '13',
        schoolYear: '2021-2022',
        representative: {
          name: 'Educación Ambiental',
        },
      },

      // literatura universal
      {
        id: 801,
        name: 'Análisis de Obras Clásicas',
        date: '12-01-2022',
        status: '11',
        schoolYear: '2021-2022',
        representative: {
          name: 'Literatura Universal',
        },
      },
      {
        id: 802,
        name: 'Presentación Literaria',
        date: '28-03-2022',
        status: '19',
        schoolYear: '2021-2022',
        representative: {
          name: 'Literatura Universal',
        },
      },

      // estadística
      {
        id: 901,
        name: 'Encuesta Social',
        date: '25-02-2022',
        status: '14',
        schoolYear: '2021-2022',
        representative: {
          name: 'Estadística',
        },
      },
      {
        id: 902,
        name: 'Análisis de Datos',
        date: '10-03-2022',
        status: '18',
        schoolYear: '2021-2022',
        representative: {
          name: 'Estadística',
        },
      },
    ];
  }

  getGrades() {
    return Promise.resolve(this.getData());
  }

  addGrade(grade: any) {
    this.grades = [grade, ...this.grades]; 
  }
}
