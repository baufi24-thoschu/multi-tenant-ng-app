import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleFourComponent } from './example-four/example-four.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleFourComponent
  ],
  exports: [ExampleFourComponent]
})
export class ExampleFourModule {}
