import { Injectable } from '@angular/core';
import { Currency } from "../currency";
import { HttpClient } from "@angular/common/http";
import { Observable } from "Rxjs";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  constructor(private http: HttpClient) { }

  getRates(base:string): Observable<Currency> {
    return this.http.get<Currency>(`https://api.apilayer.com/fixer/latest?symbols=UAH,USD,EUR&base=${base}&apikey=AvcX0ALt9UNim1eAhU5fNUYiDQddTLBO`)
  }

}
