import { NgModule } from '@angular/core';

import { ExampleFourModule } from '@multi-tenant-ng-app/example-four';
import { ExampleFiveModule } from '@multi-tenant-ng-app/example-five';
import { ExampleSixModule } from '@multi-tenant-ng-app/example-six';

import { BarListRoutingModule } from './bar-list-routing.module';
import { BarListComponent } from './bar-list/bar-list.component';

@NgModule({
  imports: [BarListRoutingModule, ExampleFourModule, ExampleFiveModule, ExampleSixModule],
  declarations: [
    BarListComponent
  ],
  exports: [
    BarListComponent
  ],
})
export class BarListModule {}
