import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooListComponent } from './foo-list/foo-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'prefix', component: FooListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooListRoutingModule {}
