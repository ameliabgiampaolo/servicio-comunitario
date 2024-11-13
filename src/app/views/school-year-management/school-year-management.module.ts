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
import { MessagesModule } from 'primeng/messages';
import { SchoolYearManagementComponent } from './school-year-management';
import { SchoolYearManagementRoutingModule } from './school-year-management-routing.module';
@NgModule({
  imports: [
    SchoolYearManagementRoutingModule,
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
    MessagesModule
  ],
  exports: [
    RadioButtonModule,
    DropdownModule,
  ],
  declarations: [
    SchoolYearManagementComponent
  ]
})
export class SchoolYearManagementModule {
}
