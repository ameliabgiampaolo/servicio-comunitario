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
    badge: {
      color: 'info',
      text: 'NEW'
    },
    children: [
      {
        name: 'Notas',
        url: '/404'
      },
      {
        name: 'Horario de clases',
        url: '/404'
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
        url: '/404'
      },
      {
        name: 'Secciones',
        url: '/404'
      },
      {
        name: 'Alumnos',
        url: '/404'
      },
      {
        name: 'Horarios de clases',
        url: '/404'
      },
      {
        name: 'Notas',
        url: '/404'
      },
      {
        name: 'Asignaturas',
        url: '/404'
      },
    ]
  },
];
