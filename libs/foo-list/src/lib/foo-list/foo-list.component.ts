import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, Inject, OnInit, Renderer2, ViewContainerRef } from '@angular/core';

import { ExampleOneComponent } from '@multi-tenant-ng-app/example-one';
import { ExampleTwoComponent } from '@multi-tenant-ng-app/example-two';
import { ExampleThreeComponent } from '@multi-tenant-ng-app/example-three';

import { KeycloakService } from 'keycloak-angular';
import { pick } from 'ramda';

@Component({
  selector: 'multi-tenant-ng-app-foo-list',
  templateUrl: './foo-list.component.html',
  styleUrls: ['./foo-list.component.scss']
})
export class FooListComponent implements AfterViewInit, OnInit {
  constructor(
    @Inject(ComponentFactoryResolver) private readonly factoryResolver: ComponentFactoryResolver,
    @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    private readonly renderer: Renderer2,
    private readonly el: ElementRef,
    private readonly keycloakService: KeycloakService
  ) {
    console.log('*** FooListComponent ***');
  }

  ngOnInit(): void {
    // Do stuff with Renderer2 and the config from keycloak
    const idTokenParsed = this.keycloakService.getKeycloakInstance().idTokenParsed;
    const idTokenParsedNamePicked = pick(['name'], idTokenParsed);
    console.log(idTokenParsedNamePicked);
  }

  ngAfterViewInit(): void {
    const div = this.renderer.createElement('multi-tenant-ng-app-example-one');
    console.log(div);
    // const text = this.renderer.createText(`Hello world from BarListComponent by ${JSON.stringify(idTokenParsedNamePicked)}`);
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.el.nativeElement, div);
    const factory = this.factoryResolver.resolveComponentFactory(ExampleOneComponent);
    const component = factory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(component.hostView)
  }
}
