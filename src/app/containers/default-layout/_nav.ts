import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    badge: {
      color: 'info',
      text: 'NEW'
    },
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Administrador'
  },
  {
    name: 'Gestion',
    iconComponent: { name: 'cil-user' },
      children: [
      {
        name: 'Gestion de Usuarios',
        url: '/user-management',
      },
      {
        name: 'Ciclos Escolares',
        url: '/school-year-management',
      },
      {
        name: 'Gestión de Secciones',
        url: '/sections-management'
      },
      {
        name: 'Gestión de Alumnos',
        url: '/student-management'
      },
      {
        name: 'Gestión de Asignaturas',
        url: '/subject-management'
      },
    ],
  },
  {
    title: true,
    name: 'Alumnos'
  },
  {
    name: 'Consultas',
    iconComponent: { name: 'cil-notes' },
    url: '/consult',
    children: [
      {
        name: 'Horario de clases',
        url: '/consult/schedule',
      },
      {
        name: 'Notas',
        url: '/consult/grades'
      },
    ]
  },
  {
    title: true,
    name: 'Docentes',
    url: '/admin'
  },
  {
    name: 'Administración Escolar',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Horarios de clases',
        url: '/schedules-management'
      },
      {
        name: 'Notas',
        url: '/upload-grades',
        badge: {
          color: 'info',
          text: 'NEW'
        },
      },
    ]
  },
];
