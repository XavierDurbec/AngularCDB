import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ComputerComponent} from './computer/computer.component';
import {CompanyComponent} from './company/company.component';
import {FormsModule} from '@angular/forms';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {CompanyService} from './company.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    CompanyComponent,
    CompanyDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CompanyService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
