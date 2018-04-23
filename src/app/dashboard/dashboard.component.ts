import {Component, OnInit} from '@angular/core';
import {Company} from '../model/company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies.slice(1, 5));
  }
}
