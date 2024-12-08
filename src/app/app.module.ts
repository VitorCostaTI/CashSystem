import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ConfiguracaoModule } from './add-ons/modules/configuracao/configuracao.module';
import { MovimentacaoModule } from './add-ons/modules/movimentacao/movimentacao.module';
import { RouterModule } from '@angular/router';
import { routes } from './add-ons/modules/routes/routes.module';
import { DashboardModule } from './add-ons/modules/dashboard/dashboard.module';

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
