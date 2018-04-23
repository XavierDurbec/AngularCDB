import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyRoutingModule} from './company-routing.module';
import {CompanyModule} from '../company.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CompanyModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyDetailComponent, CompanyListComponent],
  exports: []
})
export class CompanyRoutedModule {
}
