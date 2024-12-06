import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracaoComponent } from '../../../components/pages/configuracao/configuracao.component';
import { LimitesComponent } from '../../../components/pages/limites/limites.component';

@NgModule({
  declarations: [
    ConfiguracaoComponent,
    LimitesComponent
  ],
  exports: [
    ConfiguracaoComponent,
    LimitesComponent
  ]
})
export class ConfiguracaoModule { }
