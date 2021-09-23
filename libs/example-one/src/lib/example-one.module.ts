import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleOneComponent } from './example-one/example-one.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleOneComponent
  ],
  exports: [ExampleOneComponent]
})
export class ExampleOneModule {}
