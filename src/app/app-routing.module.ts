import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Company} from './model/company';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: CompanyDetailComponent},
  {path: 'companies', component: Company},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
