import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Company} from '../../../model/company';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {


  @Input() company: Company;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private location: Location) {
  }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.companyService.getCompany(id).subscribe(company => this.company = company);
  }

  goBack(): void {
    this.location.back();
  }

}
