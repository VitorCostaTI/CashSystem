import { NgModule } from '@angular/core';
import { ConfiguracaoComponent } from '../../../components/pages/configuracao/configuracao.component';
import { LimitesComponent } from '../../../components/pages/limites/limites.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ConfiguracaoComponent,
    LimitesComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ConfiguracaoComponent,
    LimitesComponent
  ]
})
export class ConfiguracaoModule { }
