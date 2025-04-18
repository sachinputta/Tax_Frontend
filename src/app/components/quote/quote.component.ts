import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { QuoteService } from '../../services/quote.service';
import { Quote } from '../../Models/quote';


@Component({
  selector: 'app-quote', // Changed to 'app-quote' to match typical naming
  standalone: false,
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'] // Changed to .scss for consistency
})
export class QuoteComponent implements OnChanges {
@Input() selectedQuoteId: string | null = null;
  quote: Quote | undefined;

  constructor(private quoteService: QuoteService) {}

  ngOnChanges(): void {
    if (this.selectedQuoteId) {
      this.quote = this.quoteService.getQuote(this.selectedQuoteId);
    } else {
      this.quote = undefined;
    }
  }

  markAsSent(): void {
    if (this.quote) this.quoteService.updateStatus(this.quote.id, 'SENT');
  }
}