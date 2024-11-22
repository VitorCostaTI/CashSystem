import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRateResponse } from '../../Models/exchange-rate.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  private apiUrl: string = 'https://api.exchangerate-api.com/v4/latest/brl'

  constructor(private http: HttpClient) { }

  getCambioBrl(): Observable<ExchangeRateResponse> {
    return this.http.get<ExchangeRateResponse>(this.apiUrl);
  }
}
