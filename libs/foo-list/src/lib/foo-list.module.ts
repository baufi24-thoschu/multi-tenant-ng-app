import { NgModule } from '@angular/core';

import { ExampleOneModule } from '@multi-tenant-ng-app/example-one';
import { ExampleTwoModule } from '@multi-tenant-ng-app/example-two';
import { ExampleThreeModule } from '@multi-tenant-ng-app/example-three';

import { FooListRoutingModule } from './foo-list-routing.module';
import { FooListComponent } from './foo-list/foo-list.component';

@NgModule({
  imports: [FooListRoutingModule, ExampleOneModule, ExampleTwoModule, ExampleThreeModule],
  declarations: [
    FooListComponent
  ],
  exports: [
    FooListComponent
  ]
})
export class FooListModule {}
