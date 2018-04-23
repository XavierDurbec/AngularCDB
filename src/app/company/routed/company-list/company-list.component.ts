import {Component, OnInit} from '@angular/core';
import {COMPANIES} from '../../mockCompany';
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

}
