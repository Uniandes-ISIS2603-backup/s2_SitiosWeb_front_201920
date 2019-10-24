import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderService } from './provider.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProviderListComponent],
    exports: [ProviderListComponent],
    providers: [ProviderService]
})
export class ProviderModule { }