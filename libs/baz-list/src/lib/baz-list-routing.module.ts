import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BazListComponent } from './baz-list/baz-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', component: BazListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BazListRoutingModule {}
