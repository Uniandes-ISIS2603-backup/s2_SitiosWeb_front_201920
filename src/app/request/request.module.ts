import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestService } from './request.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RequestListComponent],
  exports : [RequestListComponent],
  providers: [RequestService]
})
export class RequestModule { }