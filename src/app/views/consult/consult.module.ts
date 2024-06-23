import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradesComponent } from './grades/grades.component';
import { ConsultRoutingModule } from './consult-routing.module';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GradesComponent
  ],
  imports: [
    CommonModule,
    ConsultRoutingModule,
    TableModule,
    TagModule,
    CardModule,
    FormModule,
    GridModule,
    IconModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RadioButtonModule,
    DropdownModule,
  ]
})
export class ConsultModule {
}
