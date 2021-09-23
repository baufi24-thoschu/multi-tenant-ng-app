import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleTwoComponent } from './example-two/example-two.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleTwoComponent
  ],
  exports: [ExampleTwoComponent]
})
export class ExampleTwoModule {}
