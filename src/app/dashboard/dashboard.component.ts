import {Component, OnInit} from '@angular/core';
import {Company} from '../model/company';
import {CompanyService} from '../company.service';
import {COMPANIES} from '../company/company.component.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCompany = COMPANIES;
  companies: Company[] = [];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }
}
