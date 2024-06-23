import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Icons'
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-management'
      },
      {
        path: 'user-management',
        component: UserManagementComponent,
        data: {
          title: 'Gestión de Usuarios'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
