import { Component } from '@angular/core';

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrl: './movimentacoes.component.scss'
})
export class MovimentacoesComponent {
  value: number = 0;
  conversao: number = 0;
}
