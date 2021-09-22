import { NgModule } from '@angular/core';

import { BarListRoutingModule } from './bar-list-routing.module';
import { BarListComponent } from './bar-list/bar-list.component';

@NgModule({
  imports: [BarListRoutingModule],
  declarations: [
    BarListComponent
  ],
  exports: [
    BarListComponent
  ],
})
export class BarListModule {}
