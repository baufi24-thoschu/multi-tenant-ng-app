import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarListComponent } from './bar-list/bar-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', component: BarListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarListRoutingModule {}
