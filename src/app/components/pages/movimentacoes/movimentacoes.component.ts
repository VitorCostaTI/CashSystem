import { Component, OnInit } from '@angular/core';

import { MovimentacoesDialogComponent } from './movimentacoes-dialog/movimentacoes-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { MovimentacaoService } from '../../../add-ons/services/Movimentacao/movimentacao.service';
import { MovimentacaoData } from '../../../../database/Movimentacao';

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
    window.open('assets/pdf/template-registro-de-pagamento.pdf', '_blank');
  }

  openComprovante(): void {
    window.open('assets/pdf/comprovante.pdf', '_blank');
  }
}