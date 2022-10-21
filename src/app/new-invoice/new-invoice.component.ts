import { MatSnackBar } from '@angular/material/snack-bar';
import { InvoiceService } from './../invoice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss'],
})
export class NewInvoiceComponent implements OnInit {
  constructor(
    public invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    this.invoiceService.formItems.clear();
    this.invoiceService.createNewFormGroup();
  }

  addNewItem(): void {
    this.invoiceService.createNewFormGroup();
  }

  submitNewInvoice(): void {
    if (this.invoiceService.formItems.length > 1) {
      this.filterOutInvalidRows();
    }

    if (
      this.invoiceService.formItems.valid &&
      this.invoiceService.formItems.length
    ) {
      this.router.navigate(['preview-invoice-component']);
    } else {
      this.invoiceService.formItems.markAllAsTouched();
      this.showSnackBar('Form invalid');

      if (this.invoiceService.formItems.length === 0) {
        this.showSnackBar('Please add items');
      }
    }
  }
  private filterOutInvalidRows(): void {
    this.invoiceService.formItems = new FormArray(
      this.invoiceService.formItems.controls.filter((formGroup: FormGroup) => {
        return formGroup.valid;
      })
    );
  }
  private showSnackBar(message: string, action: string = 'ok'): void {
    this.snackBar.open(message, action, {
      duration: 1500,
    });
  }
}
