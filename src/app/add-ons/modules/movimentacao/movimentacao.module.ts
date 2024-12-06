import { NgModule } from '@angular/core';
import { MovimentacoesComponent } from '../../../components/pages/movimentacoes/movimentacoes.component';
import { MovimentacoesDialogComponent } from '../../../components/pages/movimentacoes/movimentacoes-dialog/movimentacoes-dialog.component';

@NgModule({
  declarations: [
    MovimentacoesComponent,
    MovimentacoesDialogComponent,
  ],
  exports: [
    MovimentacoesComponent,
    MovimentacoesDialogComponent,
  ]
})
export class MovimentacaoModule { }
