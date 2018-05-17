import {Injectable} from '@angular/core';
import {Company} from './model/company';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';

@Injectable()
export class CompanyService {
  urlApp = 'http://10.0.1.87:8080/webapp';

  const;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.urlApp}/companies`);
  }

  getCompany(id: number): Observable<Company> {
    this.messageService.add(`Company Service: fetched company id=${id}`);
    return this.http.get<Company>(`${this.urlApp}/company/${id}`);
  }

  update(company: Company): Observable<any> {
    console.log(company);
    return this.http.put(`${this.urlApp}/company`, company, this.httpOptions);
  }

  add(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.urlApp}/company`, company, this.httpOptions);
  }

  delete(company: Company | number): Observable<Company> {
    const id = typeof company === 'number' ? company : company.id;
    const url = `${this.urlApp}/${id}`;

    return this.http.delete<Company>(`${this.urlApp}/company/${id}`, this.httpOptions);
  }

}
