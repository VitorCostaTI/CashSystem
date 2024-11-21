import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movimentacoes-dialog',
  templateUrl: './movimentacoes-dialog.component.html',
  styleUrls: ['./movimentacoes-dialog.component.scss']
})
export class MovimentacoesDialogComponent implements OnInit {
  registrarMovimentacao!: FormGroup;
  hidePlaceholder: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hidePlaceholder = true;
    this.registrarMovimentacao = this.fb.group({
      destino: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      categoria: ['', [Validators.required]]
    });
  }

  formatCurrency(event: any) {
    let value = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = (parseInt(value) / 100).toFixed(2).replace('.', ','); // Adiciona a vírgula como separador de decimais

    // Adiciona o ponto como separador de milhar
    formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    event.target.value = 'R$ ' + formattedValue; // Adiciona o prefixo 'R$'
  }
}
