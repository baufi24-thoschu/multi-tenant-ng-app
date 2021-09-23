import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFiveComponent } from './example-five/example-five.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleFiveComponent
  ],
  exports: [ExampleFiveComponent]
})
export class ExampleFiveModule {}
