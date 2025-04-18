import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaInvoiceListComponent } from './proforma-invoice-list.component';

describe('ProformaInvoiceListComponent', () => {
  let component: ProformaInvoiceListComponent;
  let fixture: ComponentFixture<ProformaInvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProformaInvoiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProformaInvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
