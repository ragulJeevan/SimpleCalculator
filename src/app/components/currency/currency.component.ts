import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { Currency } from "../currency";
import { HttpClient } from "@angular/common/http";
import { Observable } from "Rxjs";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  amount = 1;
  from = 'USD';
  to = 'INR';
  rates!: {[key: string]: number}
  
  convert(): number{
    return this.amount * this.rates[this.to];
  }

  loadRates(){
    this.getRates(this.from).subscribe((res) => this.rates = res.rates);
    
  } 
  

  constructor(
    private http:HttpClient) {
    
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates);
  }

  getRates(base:string): Observable<Currency> {
    return this.http.get<Currency>(`https://api.apilayer.com/fixer/latest?symbols=UAH,USD,EUR,INR,AUD,CHF,AFN,
    DZD,ATS,CNY,COP,DKK,DMK,ESP,IRR,JPY,KWD,PKR,QAR,RUB,SGD,ZAR,KRW,LKR&base=${base}&apikey=AvcX0ALt9UNim1eAhU5fNUYiDQddTLBO`)
  }

  
  ngOnInit(): void {
    this.loadRates();
  }
}

