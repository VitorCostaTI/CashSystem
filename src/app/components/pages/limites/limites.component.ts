import { Component } from '@angular/core';

@Component({
  selector: 'app-limites',
  templateUrl: './limites.component.html',
  styleUrl: './limites.component.scss'
})
export class LimitesComponent {

  formatCurrency(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = (parseInt(value) / 100).toFixed(2).replace('.', ','); // Adiciona a vírgula como separador de decimais

    // Adiciona o ponto como separador de milhar
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    event.target.value = 'R$ ' + formattedValue; // Adiciona o prefixo 'R$'
  }

}
