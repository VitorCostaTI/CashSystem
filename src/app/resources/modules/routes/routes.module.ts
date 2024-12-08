import { Routes } from '@angular/router';

import { HomeComponent } from '../../../components/home/home.component';
import { DashboardComponent } from '../../../components/pages/dashboard/dashboard.component';
import { MovimentacoesComponent } from '../../../components/pages/movimentacoes/movimentacoes.component';
import { ConfiguracaoComponent } from '../../../components/pages/configuracao/configuracao.component';


export const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'movimentacao', component: MovimentacoesComponent },
      { path: 'configuracao', component: ConfiguracaoComponent },
    ]
  }
];

