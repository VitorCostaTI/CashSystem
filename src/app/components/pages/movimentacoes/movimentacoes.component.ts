import { Component } from '@angular/core';
import { Movimentacao } from '../../../Models/Movimentacao.model';

import { v4 as uuidv4 } from 'uuid';
import { MovimentacoesDialogComponent } from './movimentacoes-dialog/movimentacoes-dialog.component';
import { MatDialog } from '@angular/material/dialog';

const MovimentacaoData: Movimentacao[] = [
  {
    codigo: uuidv4(),
    origem: "Vitor Henrique Mariano da Costa",
    destino: "ELEKTRO REDES S.A",
    valor: "R$ 225,80",
    data: new Date()
  },
  {
    codigo: uuidv4(),
    origem: "Vitor Henrique Mariano da Costa",
    destino: "SANASA - Sociedade de Abastecimento de Água e Saneamento S/A.",
    valor: "R$ 125,86",
    data: new Date()
  },
  {
    codigo: uuidv4(),
    origem: "Vitor Henrique Mariano da Costa",
    destino: "Ana Paula Dias",
    valor: "R$ 299,90",
    data: new Date()
  },
  {
    codigo: uuidv4(),
    origem: "Vitor Henrique Mariano da Costa",
    destino: "Amazon Serviços de Varejo Ltda.",
    valor: "R$ 425,00",
    data: new Date()
  },
  {
    codigo: uuidv4(),
    origem: "Vitor Henrique Mariano da Costa",
    destino: "Claro S.A",
    valor: "R$ 299,90",
    data: new Date()
  }
]

@Component({
  selector: 'app-movimentacoes',
  templateUrl: './movimentacoes.component.html',
  styleUrl: './movimentacoes.component.scss'
})
export class MovimentacoesComponent {
  value: number = 0;
  conversao: number = 0;
  visibility: boolean = false;

  displayedColumns: string[] = ['obs', 'codigo', 'origem', 'destino', 'valor', 'data'];
  dataSource = MovimentacaoData;

  constructor(private dialog: MatDialog){}

  visibilityBoolean(): void {
    this.visibility = !this.visibility;
  }

  openDialogMovimentacao(enterAnimationDuration: string, exitAnimationDuration: string): void{
    this.dialog.open(MovimentacoesDialogComponent, {
      width: '99%',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
      autoFocus: false,
    })
  }
}

