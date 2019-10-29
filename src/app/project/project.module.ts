import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './project.service';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectListComponent],
  exports: [ProjectListComponent],
  providers: [ProjectService]
})
export class ProjectModule { }