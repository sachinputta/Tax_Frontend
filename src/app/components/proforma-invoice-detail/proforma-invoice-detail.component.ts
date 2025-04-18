import { Component, Input } from '@angular/core';
import { ProformaInvoice } from '../../Models/proforma-invoice';

@Component({
  selector: 'app-proforma-invoice-detail',
  standalone: false,
  templateUrl: './proforma-invoice-detail.component.html',
  styleUrl: './proforma-invoice-detail.component.css'
})
export class ProformaInvoiceDetailComponent {
  @Input() invoice: ProformaInvoice | null = null;

  printInvoice() {
    window.print();
  }
  
  downloadPDF() {
    window.print(); // You can integrate html2pdf.js for true PDF export
  }
  
}
