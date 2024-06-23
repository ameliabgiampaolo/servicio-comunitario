import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradesComponent } from './grades/grades.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Consultas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'grades'
      },
      {
        path: 'grades',
        component: GradesComponent,
        data: {
          title: 'Notas'
        }
      },
      //TODO: Agregar schedule
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultRoutingModule {
}
