import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { RequesterService } from './requester.service';
import { RequesterDetailComponent } from './requester-detail/requester-detail.component';
import { RequesterCreateComponent } from './requester-create/requester-create.component';

@NgModule({
  imports: [ AppRoutingModule, CommonModule, FormsModule],
  declarations: [ RequesterListComponent, RequesterDetailComponent, RequesterCreateComponent ],
  exports: [ RequesterListComponent, RequesterCreateComponent ],
  providers: [ RequesterService ]
})
export class RequesterModule { }