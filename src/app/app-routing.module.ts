import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'memories', loadChildren: 'app/memories/memories.module#MemoriesModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
