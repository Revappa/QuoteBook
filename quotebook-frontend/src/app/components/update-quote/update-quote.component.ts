import { Component, OnInit } from '@angular/core';
import { Quote } from '../../quote';
import { ActivatedRoute, Router } from '@angular/router';
import { QuoteService } from '../../quote.service';

@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  id: number;
  quote: Quote;
  submitted: boolean;

  constructor(private route: ActivatedRoute,private router: Router,
    private quoteService: QuoteService) { }

  ngOnInit() {
    this.quote = new Quote();

    this.id = this.route.snapshot.params['id'];
    
    this.quoteService.getQuote(this.id)
      .subscribe(data => {
        console.log(data)
        this.quote = data;
      }, error => console.log(error));
  }

  updateQuote() {
    this.quoteService.updateQuote(this.id, this.quote)
      .subscribe(data => console.log(data), error => console.log(error));
    this.quote = new Quote();
    this.gotoList();
  }

  onSubmit() {
    this.updateQuote();    
  }
  
  gotoList() {
    this.router.navigate(['/quotes']);
  }
}
