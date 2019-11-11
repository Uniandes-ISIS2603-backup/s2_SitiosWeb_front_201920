import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitDetailComponent } from './unit-detail/unit-detail.component';
import { UnitCreateComponent } from './unit-create/unit-create.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UnitListComponent, UnitDetailComponent, UnitCreateComponent]
})
export class UnitModule { }
