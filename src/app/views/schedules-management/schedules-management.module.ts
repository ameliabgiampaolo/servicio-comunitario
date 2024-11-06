import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SchedulesManagement } from './schedules-management';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule, GridModule, FormModule, ToastModule, TableModule, DropdownModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { SchedulesManagementRoutingModule } from './schedules-management-routing.module';

@NgModule({
  declarations: [
    SchedulesManagement
  ],
  imports: [
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
    MultiSelectModule,
    SchedulesManagementRoutingModule,
    FullCalendarModule
  ]
})
export class SchedulesManagementModule { }