import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsManagementComponent } from './sections-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de Secciones'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sections-management'
      },
      {
        path: 'sections-management',
        component: SectionsManagementComponent,
        data: {
          title: 'Gestión de Secciones'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsManagementRoutingModule {
}
