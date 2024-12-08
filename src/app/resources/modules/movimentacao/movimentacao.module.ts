import { NgModule } from '@angular/core';
import { MovimentacoesComponent } from '../../../components/pages/movimentacoes/movimentacoes.component';
import { SharedModule } from '../../shared/shared.module';
import { MovimentacoesDialogComponent } from '../../../components/pages/movimentacoes/movimentacoes-dialog/movimentacoes-dialog.component';

@NgModule({
  declarations: [
    MovimentacoesComponent,
    MovimentacoesDialogComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MovimentacoesComponent,
    MovimentacoesDialogComponent
  ]
})
export class MovimentacaoModule { }
