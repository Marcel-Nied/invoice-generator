import { PreviewInvoiceComponent } from './preview-invoice/preview-invoice.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/new-invoice-component', pathMatch: 'full' },
  { path: 'new-invoice-component', component: NewInvoiceComponent },
  { path: 'preview-invoice-component', component: PreviewInvoiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
