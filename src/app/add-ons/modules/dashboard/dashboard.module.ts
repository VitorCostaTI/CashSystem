import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../../components/home/home.component';
import { DashboardComponent } from '../../../components/pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routes/routes.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  exports: [
    DashboardComponent,
    HomeComponent,
  ]
})

export class DashboardModule { }
