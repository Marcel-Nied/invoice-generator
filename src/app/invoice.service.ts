import { Company } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  company: Company = {
    name: '',
    address: '',
    phones: [],
  };

  formItems = new FormArray<FormGroup>([]);

  constructor(private http: HttpClient) {}

  getCompanyDataService() {
    return this.http
      .get<Company>('/assets/company.json')
      .subscribe((company) => (this.company = company));
  }

  createNewFormGroup(): void {
    const initialFormGroupValue = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
      ]),
      count: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        Validators.pattern(/^[0-9]*$/),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(1000000),
        Validators.pattern(/^[0-9]*$/),
      ]),
      number: new FormControl(Number(this.formItems.length + 1)),
    };
    const newFormGroup = new FormGroup(initialFormGroupValue);

    this.formItems.push(newFormGroup);
  }
}
