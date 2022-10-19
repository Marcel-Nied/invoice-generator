import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-invoice',
  templateUrl: './preview-invoice.component.html',
  styleUrls: ['./preview-invoice.component.scss'],
})
export class PreviewInvoiceComponent implements OnInit {
  constructor(public invoiceService: InvoiceService) {}

  ngOnInit() {
    this.getCompanyData();
  }

  getCompanyData() {
    this.invoiceService.getCompanyDataService();
  }
}
