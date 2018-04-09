import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { MemoriesComponent } from './memories.component';
import { MemoriesRoutingModule } from './memories-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MemoriesRoutingModule
  ],
  declarations: [MemoriesComponent]
})
export class MemoriesModule { }
