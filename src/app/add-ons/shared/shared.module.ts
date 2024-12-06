import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { routes } from '../modules/routes/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { materialModules } from '../../../styles/material/material';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    materialModules
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ]
})

export class SharedModule { }
