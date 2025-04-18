import { Component, OnInit } from '@angular/core';
import { ProformaInvoice } from '../../Models/proforma-invoice';
import { ProformaInvoiceService } from '../../services/proforma-invoice.service';

@Component({
  selector: 'app-proforma-invoice-list',
  standalone: false,
  templateUrl: './proforma-invoice-list.component.html',
  styleUrl: './proforma-invoice-list.component.css'
})
export class ProformaInvoiceListComponent implements OnInit {

  invoices: ProformaInvoice[] = [];
  selectedInvoice: ProformaInvoice | null = null;

  constructor(private invoiceService: ProformaInvoiceService) {}

  ngOnInit(): void {
    this.invoices = this.invoiceService.getAllInvoices();
  }

  selectInvoice(invoice: ProformaInvoice) {
    this.selectedInvoice = invoice;
  }

}
