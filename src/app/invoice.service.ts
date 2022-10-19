import { Company } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  company: Company = {
    name: '',
    address: '',
    phones: [],
  };

  constructor(private http: HttpClient) {}

  getCompanyDataService() {
    return this.http
      .get<Company>('/assets/company.json')
      .subscribe((company) => (this.company = company));
  }
}
