import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleThreeComponent } from './example-three/example-three.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ExampleThreeComponent
  ],
  exports: [ExampleThreeComponent]
})
export class ExampleThreeModule {}
