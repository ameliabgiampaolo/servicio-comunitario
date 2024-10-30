import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { MultiSelectModule } from 'primeng/multiselect';
import { StudentManagementComponent } from './student-management';
import { StudentManagementRoutingModule } from './student-management-routing.module';
@NgModule({
  imports: [
    StudentManagementRoutingModule,
    CardModule,
    GridModule,
    IconModule,
    CommonModule,
    FormModule,
    ToastModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    TagModule,
    InputTextModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    MultiSelectModule
  ],
  exports: [
    RadioButtonModule,
    DropdownModule,
  ],
  declarations: [
    StudentManagementComponent
  ]
})
export class StudentManagementModule {
}
