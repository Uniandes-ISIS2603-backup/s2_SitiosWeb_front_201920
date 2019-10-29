import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperService } from './developer.service';

@NgModule({
  imports: [CommonModule],
  declarations: [DeveloperListComponent],
  exports: [DeveloperListComponent],
  providers: [DeveloperService]
})
export class DeveloperModule { }