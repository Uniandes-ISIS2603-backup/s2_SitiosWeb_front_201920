import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { RequesterDetailComponent } from './requester-detail/requester-detail.component';
import { RequesterService } from './requester.service';
import { RequesterCreateComponent } from './requester-create/requester-create.component';

@NgModule({
  imports: [ BrowserModule, AppRoutingModule, CommonModule, ReactiveFormsModule, FormsModule, NgbModule, NgxPermissionsModule ],
  declarations: [ RequesterListComponent, RequesterCreateComponent, RequesterDetailComponent ],
  exports: [ RequesterListComponent, RequesterCreateComponent ],
  providers: [ RequesterService ]
})
export class RequesterModule { }