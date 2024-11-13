import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchoolYearManagementComponent } from './school-year-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestión de Ciclos Escolares'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'school-year-management'
      },
      {
        path: 'school-year-management',
        component: SchoolYearManagementComponent,
        data: {
          title: 'Gestión de Ciclos Escolares'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolYearManagementRoutingModule {
}
