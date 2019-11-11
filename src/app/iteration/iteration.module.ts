import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationListComponent } from './iteration-list/iteration-list.component';
import { IterationService } from './iteration.service';
import { IterationCreateComponent } from './iteration-create/iteration-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { IterationDetailComponent } from './iteration-detail/iteration-detail.component';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,RouterModule
  ],
  declarations: [IterationDetailComponent, IterationCreateComponent,IterationListComponent],
  exports: [IterationListComponent, IterationCreateComponent],
  providers: [IterationService]
})
export class IterationModule { }