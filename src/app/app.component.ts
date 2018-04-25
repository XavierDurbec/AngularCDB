import {Component, OnInit} from '@angular/core';
import {Company} from './model/company';
import {CompanyService} from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Company Database';
  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  delete(company: Company): void {
    this.companies = this.companies.filter(h => h !== company);
    this.companyService.delete(company).subscribe();
  }
}
