import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private baseUrl = 'http://localhost:8080/api/v2/quotes';

  constructor(private http: HttpClient) { }

  getQuote(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createQuote(quote: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, quote);
  }

  updateQuote(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteQuote(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getQuotesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
