import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IterationListComponent } from './iteration-list/iteration-list.component';
import { IterationService } from './iteration.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IterationListComponent],
  exports: [IterationListComponent],
  providers: [IterationService]
})
export class IterationModule { }