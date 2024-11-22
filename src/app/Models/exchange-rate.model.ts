export interface ExchangeRateResponse {
    base: string;
    rates: {
      [key: string]: number; // As moedas são representadas por uma chave dinâmica
    };
    date: string;
  }
  