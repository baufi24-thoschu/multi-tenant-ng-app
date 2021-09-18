import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BazListComponent } from './baz-list/baz-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BazListComponent
  ],
  exports: [
    BazListComponent
  ],
})
export class BazListModule {}
