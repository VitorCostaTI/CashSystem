import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
      destino: [''],
      valor: ['']
    });
  }
}
