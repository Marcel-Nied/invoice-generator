import { InvoiceService } from './../invoice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss'],
})
export class InvoiceItemComponent {
  constructor(public invoiceService: InvoiceService) {}

  deleteItem(index: number): void {
    this.invoiceService.formItems.removeAt(index);
  }
}
