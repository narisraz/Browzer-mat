import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialModule { }
