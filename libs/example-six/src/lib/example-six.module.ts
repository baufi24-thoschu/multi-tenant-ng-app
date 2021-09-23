import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleSixComponent } from './example-six/example-six.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleSixComponent
  ],
  exports: [ExampleSixComponent]
})
export class ExampleSixModule {}
