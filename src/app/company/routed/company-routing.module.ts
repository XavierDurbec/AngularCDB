import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CompanyListComponent} from './company-list/company-list.component';

const routes: Routes = [
  {path: '', component: CompanyListComponent},
  {path: 'detail/:id', component: CompanyDetailComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class CompanyRoutingModule { }
