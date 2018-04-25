import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ComputerComponent} from './computer/computer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyService} from './company.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CompanyDetailComponent} from './company/company-detail/company-detail.component';
import {CompanyAddComponent} from './company/company-add/company-add.component';
import {
  MatButtonModule,
  MatButtonToggleModule, MatCardModule,
  MatIconModule, MatInputModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ComputerComponent,
    MessagesComponent,
    DashboardComponent,
    CompanyDetailComponent,
    CompanyAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule

  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [CompanyService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
