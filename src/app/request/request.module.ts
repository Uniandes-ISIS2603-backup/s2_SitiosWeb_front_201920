import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestService } from './request.service';
import { RequestDetailComponent } from '../request/request-detail/request-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequestListComponent, RequestDetailComponent],
  exports : [RequestListComponent, RequestDetailComponent],
  providers: [RequestService]
})
export class RequestModule { }