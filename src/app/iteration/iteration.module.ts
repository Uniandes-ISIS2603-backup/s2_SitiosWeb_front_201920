import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';
import { IterationDetailComponent } from './iteration-detail/iteration-detail.component';
import { IterationCreateComponent } from './iteration-create/iteration-create.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {IterationService} from './iteration.service';
import {IterationListComponent} from './iteration-list/iteration-list.component';

@NgModule({
  imports: [
    AppRoutingModule, CommonModule, FormsModule
  ],
  declarations: [IterationDetailComponent, IterationCreateComponent,IterationListComponent],
  exports: [IterationListComponent],
  providers: [IterationService]
})
export class IterationModule { }