import {Component, OnInit} from '@angular/core';
import {COMPANIES} from './mockCompany';
import {Company} from '../model/company';
import {CompanyService} from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  listCompany = COMPANIES;
  companies: Company[];
  selectedCompany: Company;

  constructor(private companyService: CompanyService) {
  }


  ngOnInit() {
//  Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
//  The constructor shouldn't do anything.
//  It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.

    this.getHeroes();
  }

  getHeroes(): void {
    this.companyService.getCompanies().subscribe(companies => this.companies = companies);
  }


}
