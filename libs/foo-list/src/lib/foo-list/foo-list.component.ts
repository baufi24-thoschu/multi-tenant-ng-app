import {
  AfterViewInit,
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Inject, OnInit, Renderer2, ViewContainerRef
} from '@angular/core';

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
export class FooListComponent implements OnInit {
  private exampleOneComponentFactory: ComponentFactory<ExampleOneComponent> | undefined;
  private exampleOneComponentRef: ComponentRef<ExampleOneComponent> | undefined;

  private exampleTwoComponentFactory: ComponentFactory<ExampleTwoComponent> | undefined;
  private exampleTwoComponentRef: ComponentRef<ExampleTwoComponent> | undefined;

  constructor(
    @Inject(ComponentFactoryResolver) private readonly factoryResolver: ComponentFactoryResolver,
    @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    private readonly renderer: Renderer2,
    private readonly keycloakService: KeycloakService
  ) {}

  ngOnInit(): void {
    const idTokenParsed = this.keycloakService.getKeycloakInstance().idTokenParsed;
    const idTokenParsedNamePicked = pick(['name'], idTokenParsed);
    // ToDo
    console.log(idTokenParsedNamePicked);
    const config = {foo: 1, bar: true, baz: 'Tom S.'};
    this.doExampleOneComponent(config.baz);
    this.doExampleTwoComponent(config.bar);
  }

  private doExampleOneComponent(param: any): void {
    this.exampleOneComponentFactory = this.factoryResolver.resolveComponentFactory(ExampleOneComponent);
    this.exampleOneComponentRef = this.exampleOneComponentFactory.create(this.viewContainerRef.injector);

    this.renderer.setProperty(this.exampleOneComponentRef.instance, 'config', param);
    this.renderer.addClass(this.exampleOneComponentRef.location.nativeElement, 'wild');
    this.renderer.setStyle(this.exampleOneComponentRef.location.nativeElement, 'color', 'grey');

    this.viewContainerRef.insert(this.exampleOneComponentRef.hostView);
  }

  private doExampleTwoComponent(param: any): void {
    this.exampleTwoComponentFactory = this.factoryResolver.resolveComponentFactory(ExampleTwoComponent);
    this.exampleTwoComponentRef = this.exampleTwoComponentFactory.create(this.viewContainerRef.injector);

    this.renderer.setProperty(this.exampleTwoComponentRef.instance, 'config', param);
    this.renderer.addClass(this.exampleTwoComponentRef.location.nativeElement, 'cool');
    this.renderer.setStyle(this.exampleTwoComponentRef.location.nativeElement, 'color', 'orange');

    this.viewContainerRef.insert(this.exampleTwoComponentRef.hostView);
  }
}
