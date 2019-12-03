import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { RequesterDetailComponent } from './requester-detail/requester-detail.component';
import { RequesterService } from './requester.service';
import { RequesterCreateComponent } from './requester-create/requester-create.component';

@NgModule({
  imports: [ AppRoutingModule, CommonModule, ReactiveFormsModule],
  declarations: [ RequesterListComponent, RequesterCreateComponent, RequesterDetailComponent ],
  exports: [ RequesterListComponent, RequesterCreateComponent ],
  providers: [ RequesterService ]
})
export class RequesterModule { }