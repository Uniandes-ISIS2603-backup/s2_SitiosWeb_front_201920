import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  declarations: [ProjectListComponent, ProjectDetailComponent, ProjectCreateComponent],
  exports: [ProjectListComponent, ProjectCreateComponent],
  providers: [ProjectService]
})
export class ProjectModule { }