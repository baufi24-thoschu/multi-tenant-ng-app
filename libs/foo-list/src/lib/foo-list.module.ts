import { NgModule } from '@angular/core';

import { FooListRoutingModule } from './foo-list-routing.module';
import { FooListComponent } from './foo-list/foo-list.component';

@NgModule({
  imports: [FooListRoutingModule],
  declarations: [
    FooListComponent
  ],
  exports: [
    FooListComponent
  ]
})
export class FooListModule {}
