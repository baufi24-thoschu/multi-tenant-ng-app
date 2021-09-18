import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarListComponent } from './bar-list/bar-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BarListComponent
  ],
  exports: [
    BarListComponent
  ],
})
export class BarListModule {}
