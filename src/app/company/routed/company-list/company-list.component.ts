import {Component, OnInit} from '@angular/core';
import {COMPANIES} from '../../company.component.mock';
import {Company} from '../../../model/company';
import {CompanyService} from '../../../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  listCompany = COMPANIES;
  companies: Company[];

  constructor(private companyService: CompanyService) {
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.companyService.add({name} as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }

  delete(company: Company): void {
    this.companies = this.companies.filter(h => h !== company);
    this.companyService.delete(company).subscribe();
  }

}
