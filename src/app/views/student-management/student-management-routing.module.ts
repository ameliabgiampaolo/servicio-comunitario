import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagementComponent } from './student-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de Alumnos'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'student-management'
      },
      {
        path: 'student-management',
        component: StudentManagementComponent,
        data: {
          title: 'Gestión de Alumnos'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagementRoutingModule {
}
