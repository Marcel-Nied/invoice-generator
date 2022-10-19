import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent implements OnInit {
  countFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(100),
  ]);

  priceFormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(1000000),
  ]);
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    this.invoiceService.getCompanyDataService();
  }
}
