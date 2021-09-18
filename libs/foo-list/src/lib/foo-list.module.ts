import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooListComponent } from './foo-list/foo-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    FooListComponent
  ],
  exports: [
    FooListComponent
  ]
})
export class FooListModule {}
