import { Observable } from "rxjs";
import { QuoteService } from "../../quote.service";
import { Quote } from "../../quote";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Observable<Quote[]>;
  constructor(private quoteService: QuoteService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.quotes = this.quoteService.getQuotesList();
  }

  deleteQuote(id: number) {
    this.quoteService.deleteQuote(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  quoteDetails(id: number){
    this.router.navigate(['quotedetails', id]);
  }

  updateQuote(id: number){
    this.router.navigate(['updatequote', id]);
  }

}
