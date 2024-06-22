import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Usuarios'
  },
  {
    name: 'Gestion de usuarios',
    url: '/consult/users',
    iconComponent: { name: 'cil-user' }
  },
  {
    name: 'Consultas',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Notas',
        url: '/base/accordion'
      },
      {
        name: 'Horario de clases',
        url: '/base/accordion'
      },
    ]
  },
  {
    name: 'Administración Escolar',
    iconComponent: { name: 'cil-settings' },
    children: [
      {
        name: 'Ciclos Escolares',
        url: '/base/accordion'
      },
      {
        name: 'Secciones',
        url: '/base/accordion'
      },
      {
        name: 'Alumnos',
        url: '/base/accordion'
      },
      {
        name: 'Horarios de clases',
        url: '/base/accordion'
      },
      {
        name: 'Notas',
        url: '/base/accordion'
      },
      {
        name: 'Asignaturas',
        url: '/base/accordion'
      },
    ]
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
