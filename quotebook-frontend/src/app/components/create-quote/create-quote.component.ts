import { QuoteService } from '../../quote.service';
import { Quote } from '../../quote';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  quote: Quote = new Quote();
  submitted = false;

  constructor(private quoteService: QuoteService,
    private router: Router) { }

  ngOnInit() {
  }

  newQuote(): void {
    this.submitted = false;
    this.quote = new Quote();
  }

  save() {
    this.quoteService.createQuote(this.quote)
      .subscribe(data => console.log(data), error => console.log(error));
    this.quote = new Quote();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/home']);
  }
}
