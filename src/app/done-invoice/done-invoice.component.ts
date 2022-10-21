import { InvoiceItem } from './../interfaces';
import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-done-invoice',
  templateUrl: './done-invoice.component.html',
  styleUrls: ['./done-invoice.component.scss'],
})
export class DoneInvoiceComponent implements OnInit {
  fullInvoice: InvoiceItem[] = this.invoiceService.formItems.value;
  displayedColumns: string[] = ['number', 'name', 'count', 'price'];
  sum: number = 0;

  constructor(public invoiceService: InvoiceService) {}

  ngOnInit() {
    this.sumOfItems();
  }

  sumOfItems(): void {
    const itemPrices: number[] = this.fullInvoice.map((item) => {
      return item.count * item.price;
    });

    this.sum = itemPrices.reduce((a, b) => a + b, 0);
  }
}
