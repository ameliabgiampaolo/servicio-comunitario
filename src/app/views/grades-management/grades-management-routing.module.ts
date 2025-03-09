import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradesManagementComponent } from './grades-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cargar Notas'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'upload-grades'
      },
      {
        path: 'upload-grades',
        component: GradesManagementComponent,
        data: {
          title: 'Cargar Notas'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesManagementRoutingModule {
}
