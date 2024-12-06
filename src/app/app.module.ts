import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { MovimentacoesComponent } from './components/pages/movimentacoes/movimentacoes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import { MovimentacoesDialogComponent } from './components/pages/movimentacoes/movimentacoes-dialog/movimentacoes-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracaoComponent } from './components/pages/configuracao/configuracao.component';
import { LimitesComponent } from './components/pages/limites/limites.component';
import { SharedModule } from './add-ons/shared/shared.module';

import localePt from '@angular/common/locales/pt';
import { ConfiguracaoModule } from './add-ons/modules/configuracao/configuracao.module';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    DashboardComponent,
    MovimentacoesComponent,
    MovimentacoesDialogComponent,
  ],
  imports: [
    BrowserModule,
    
    SharedModule,
    
    ConfiguracaoModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }  // Configura a localidade para 'pt-BR'
  ],
})

export class AppModule { }
