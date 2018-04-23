import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySharedComponent } from './shared/company-shared/company-shared.component';
import { CompanyModalComponent } from './modals/company-modal/company-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CompanySharedComponent, CompanyModalComponent],
  entryComponents: [CompanyModalComponent]
})
export class CompanyModule { }
