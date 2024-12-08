import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ConfiguracaoModule } from './resources/modules/configuracao/configuracao.module';
import { MovimentacaoModule } from './resources/modules/movimentacao/movimentacao.module';
import { RouterModule } from '@angular/router';
import { routes } from './resources/modules/routes/routes.module';
import { DashboardModule } from './resources/modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    DashboardModule,
    ConfiguracaoModule,
    MovimentacaoModule
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
