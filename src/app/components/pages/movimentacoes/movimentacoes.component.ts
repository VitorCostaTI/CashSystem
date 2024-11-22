import { Component, OnInit } from '@angular/core';
import { Movimentacao } from '../../../Models/Movimentacao.model';

import { v4 as uuidv4 } from 'uuid';
import { MovimentacoesDialogComponent } from './movimentacoes-dialog/movimentacoes-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MovimentacaoService } from '../../../Services/Movimentacao/movimentacao.service';
import * as XLSX from 'xlsx';

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

export class MovimentacoesComponent implements OnInit {
  value: number = 0;
  conversao: number = 0;
  visibility: boolean = false;
  isLoading: boolean = false;
  errLoading: boolean = false;

  displayedColumns: string[] = ['obs', 'codigo', 'origem', 'destino', 'valor', 'data'];
  dataSource = MovimentacaoData;

  dataCambio: { [key: string]: number } = {};

  constructor(
    private dialog: MatDialog,
    private movimentacaoService: MovimentacaoService
  ) { }

  ngOnInit(): void {
    this.getCambio()
  }

  visibilityBoolean(): void {
    this.visibility = !this.visibility;
  }

  getCambio() {
    this.isLoading = true;
    this.movimentacaoService.getCambioBrl().subscribe({
      next: (data) => {
        this.dataCambio = data.rates;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = true;
        console.error("Falha ao consultar dados do cambio: ", err)
      }
    })
  }

  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dataSource); 
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    XLSX.utils.book_append_sheet(wb, ws, 'Registro Movimentações');

    XLSX.writeFile(wb, 'dados-movimentacao.xlsx');
  }

  openDialogMovimentacao(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(MovimentacoesDialogComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
      autoFocus: false,
    })
  }

  openDocumention(): void {
    window.open('assets/pdf/template-comprovante-de-pagamento.pdf', '_blank');
  }
}