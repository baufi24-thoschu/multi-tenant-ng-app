import { NgModule } from '@angular/core';

import { BazListRoutingModule } from './baz-list-routing.module';
import { BazListComponent } from './baz-list/baz-list.component';

@NgModule({
  imports: [BazListRoutingModule],
  declarations: [
    BazListComponent
  ],
  exports: [
    BazListComponent
  ],
})
export class BazListModule {}
