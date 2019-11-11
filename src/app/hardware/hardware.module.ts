import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HardwareListComponent } from './hardware-list/hardware-list.component';
import { HardwareService } from './hardware.service';
import { HardwareDetailComponent } from './hardware-detail/hardware-detail.component';
import { HardwareCreateComponent } from './hardware-create/hardware-create.component';

@NgModule({
  imports: [ AppRoutingModule, CommonModule, FormsModule],
  declarations: [HardwareListComponent, HardwareDetailComponent, HardwareCreateComponent],
  exports: [HardwareListComponent, HardwareCreateComponent],
  providers: [HardwareService]
})
export class HardwareModule { }