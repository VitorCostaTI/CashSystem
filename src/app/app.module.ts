import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { SharedModule } from './Shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MovimentacoesComponent } from './components/pages/movimentacoes/movimentacoes.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MovimentacoesDialogComponent } from './components/pages/movimentacoes/movimentacoes-dialog/movimentacoes-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'movimentacao', component: MovimentacoesComponent },
    ]
  }
];

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MovimentacoesComponent,
    MovimentacoesDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    SharedModule,
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
