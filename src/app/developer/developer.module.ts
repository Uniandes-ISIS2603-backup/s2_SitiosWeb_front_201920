import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DeveloperListComponent } from './developer-list/developer-list.component';
import { DeveloperService } from './developer.service';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { DeveloperCreateComponent } from './developer-create/developer-create.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, NgbModule, NgxPermissionsModule ],
  declarations: [ DeveloperListComponent, DeveloperDetailComponent, DeveloperCreateComponent ],
  exports: [ DeveloperListComponent, DeveloperCreateComponent ],
  providers: [ DeveloperService ]
})
export class DeveloperModule { }