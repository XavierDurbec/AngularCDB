import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {CompanyAddComponent} from './company/company-add/company-add.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'company/detail/:id', component: CompanyDetailComponent},
  {path: 'add', component: CompanyAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: []
})
export class AppRoutingModule {
}
