import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: CompanyDetailComponent},
  {path: 'companies', component: CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: []
})
export class AppRoutingModule {
}
