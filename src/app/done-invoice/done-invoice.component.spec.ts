import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneInvoiceComponent } from './done-invoice.component';

describe('DoneInvoiceComponent', () => {
  let component: DoneInvoiceComponent;
  let fixture: ComponentFixture<DoneInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneInvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
