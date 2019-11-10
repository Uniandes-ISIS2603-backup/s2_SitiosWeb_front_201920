import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperService } from './developer.service';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DeveloperCreateComponent } from './developer-create/developer-create.component';

@NgModule({
  imports: [ AppRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [ DeveloperListComponent, DeveloperDetailComponent, DeveloperCreateComponent ],
  exports: [ DeveloperListComponent, DeveloperCreateComponent ],
  providers: [ DeveloperService ]
})
export class DeveloperModule { }