import {Component, OnInit} from '@angular/core';
import {Company} from '../../model/company';
import {CompanyService} from '../../company.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.scss']
})
export class CompanyAddComponent implements OnInit {

  companies: Company[];

  constructor(private companyService: CompanyService, private router: Router) {
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
      .subscribe(() => this.router.navigate(['dashboard']));
  }
}
