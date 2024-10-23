import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectManagementComponent } from './subject-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de Asignaturas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'subject-management'
      },
      {
        path: 'subject-management',
        component: SubjectManagementComponent,
        data: {
          title: 'Gestión de Asignaturas'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectManagementRoutingModule {
}
