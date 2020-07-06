import { Quote } from '../../quote';
import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../../quote.service';
import { QuoteListComponent } from '../quote-list/quote-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  id: number;
  quote: Quote;

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

  list(){
    this.router.navigate(['quotes']);
  }
}
