import { NgModule } from '@angular/core';

import { ExampleOneModule } from '@multi-tenant-ng-app/example-one';
import { ExampleTwoModule } from '@multi-tenant-ng-app/example-two';
import { ExampleThreeModule } from '@multi-tenant-ng-app/example-three';
import { ExampleFourModule } from '@multi-tenant-ng-app/example-four';
import { ExampleFiveModule } from '@multi-tenant-ng-app/example-five';
import { ExampleSixModule } from '@multi-tenant-ng-app/example-six';

import { BazListRoutingModule } from './baz-list-routing.module';
import { BazListComponent } from './baz-list/baz-list.component';

@NgModule({
  imports: [
    BazListRoutingModule,
    ExampleOneModule, ExampleTwoModule, ExampleThreeModule,
    ExampleFourModule, ExampleFiveModule, ExampleSixModule
  ],
  declarations: [
    BazListComponent
  ],
  exports: [
    BazListComponent
  ],
})
export class BazListModule {}
