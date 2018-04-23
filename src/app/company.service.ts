import {Injectable} from '@angular/core';
import {Company} from './model/company';
import {COMPANIES} from './company/mockCompany';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class CompanyService {

  constructor(private messageService: MessageService) {
  }

  getCompanies(): Observable<Company[]> {
    this.messageService.add('Company Service: fetched companies');
    return of(COMPANIES);
  }

  getCompany(id: number): Observable<Company> {
    this.messageService.add(`Company Service: fetched company id=${id}`);
    return of(COMPANIES.find(company => company.id === id));
  }
}
