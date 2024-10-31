import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
];

@NgModule({
  declarations: [], // Remova o 'material' de declarações
  imports: [
    CommonModule,
    ...material // Expande o array material aqui
  ],
  exports: [
    ...material // Expande o array material aqui para exportá-los
  ]
})
export class SharedModule { }
