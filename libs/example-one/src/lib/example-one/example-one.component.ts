import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'multi-tenant-ng-app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss']
})
export class ExampleOneComponent implements OnInit {
  @Input() public config: any | undefined;

  // constructor() {}

  ngOnInit(): void {
    console.log(this.config);
  }
}
