import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { materialModules } from '../../../Styles/material/material';
import { RouterModule } from '@angular/router';
import { routes } from '../modules/routes/routes.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    materialModules
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    materialModules
  ]
})

export class SharedModule { }
