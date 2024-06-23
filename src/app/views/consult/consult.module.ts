import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades/grades.component';
import { ConsultRoutingModule } from './consult-routing.module';

@NgModule({
  declarations: [
    GradesComponent
  ],
  imports: [
    CommonModule,
    ConsultRoutingModule
  ],
  exports: [
    GradesComponent,
  ]
})
export class ConsultModule {
}
