import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchedulesManagement } from './schedules-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Horario de clases'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'schedules-management'
      },
      {
        path: 'schedules-management',
        component: SchedulesManagement,
        data: {
          title: 'Horario de clases'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesManagementRoutingModule {
}
