import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    title: true,
    name: 'Usuarios'
  },
  {
    name: 'Gestion de usuarios',
    url: '/user-management',
    iconComponent: { name: 'cil-user' },
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
        name: 'Notas',
        url: '/consult/grades'
      },
      {
        name: 'Horario de clases',
        url: '/consult/schedule',
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
        name: 'Ciclos Escolares',
        url: '/404',
        badge: {
          color: 'info',
          text: 'NEW'
        },
      },
      {
        name: 'Secciones',
        url: '/404',
        badge: {
          color: 'info',
          text: 'NEW'
        },
      },
      {
        name: 'Alumnos',
        url: '/student-management'
      },
      {
        name: 'Horarios de clases',
        url: '/schedules-management'
      },
      {
        name: 'Notas',
        url: '/404',
        badge: {
          color: 'info',
          text: 'NEW'
        },
      },
      {
        name: 'Asignaturas',
        url: '/subject-management'
      },
    ]
  },
];
