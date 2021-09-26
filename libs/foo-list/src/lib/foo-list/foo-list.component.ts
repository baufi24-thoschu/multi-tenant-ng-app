import {
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  Inject, OnInit, Renderer2, ViewContainerRef
} from '@angular/core';

import { KeycloakService } from 'keycloak-angular';
import { KeycloakInstance, KeycloakTokenParsed } from 'keycloak-js';
import { hasIn } from 'ramda';

import { ExampleOneComponent } from '@multi-tenant-ng-app/example-one';
import { ExampleTwoComponent } from '@multi-tenant-ng-app/example-two';
import { ExampleThreeComponent } from '@multi-tenant-ng-app/example-three';

import { FooListInterface, FooListConfigInterface } from './foo-list.interface';

@Component({
  selector: 'multi-tenant-ng-app-foo-list',
  templateUrl: './foo-list.component.html',
  styleUrls: ['./foo-list.component.scss']
})
export class FooListComponent implements OnInit {
  private readonly idTokenParsed: KeycloakTokenParsed | undefined;

  private exampleOneComponentFactory: ComponentFactory<ExampleOneComponent> | undefined;
  private exampleOneComponentRef: ComponentRef<ExampleOneComponent> | undefined;
  private exampleTwoComponentFactory: ComponentFactory<ExampleTwoComponent> | undefined;
  private exampleTwoComponentRef: ComponentRef<ExampleTwoComponent> | undefined;
  private exampleThreeComponentFactory: ComponentFactory<ExampleThreeComponent> | undefined;
  private exampleThreeComponentRef: ComponentRef<ExampleThreeComponent> | undefined;

  public readonly user_avatar: URL;

  constructor(
    @Inject(ComponentFactoryResolver) private readonly factoryResolver: ComponentFactoryResolver,
    @Inject(ViewContainerRef) private readonly viewContainerRef: ViewContainerRef,
    private readonly renderer: Renderer2,
    private readonly keycloakService: KeycloakService
  ) {
    const keycloakInstance: KeycloakInstance = this.keycloakService.getKeycloakInstance();
    this.idTokenParsed = keycloakInstance.idTokenParsed;

    this.user_avatar = hasIn('avatar_url', this.idTokenParsed) ?
      new URL((this.idTokenParsed as FooListInterface).avatar_url) :
        new URL('https://ik.imagekit.io/uvfrqmdnhxst/Default_Image_Thumbnail_tAp2HMoMxj.png?updatedAt=1632665691367');

    console.log(hasIn('name', this.idTokenParsed) ? (this.idTokenParsed as FooListInterface).name : '!!! noname !!!');
  }


  ngOnInit(): void {
    const defaultConfig: FooListConfigInterface = {
      "id": 0,
      "online": false,
      "app_name": '',
      "css_version": '',
      "lang": '',
      "modules": {
        "mgt_calc": 'default foo',
        "mgt_budget_calc": 'default bar',
        "immo_rates": 'default baz'
      }
    };

    const config: FooListConfigInterface = hasIn('config', this.idTokenParsed) ?
      (this.idTokenParsed as FooListInterface).config :
        defaultConfig;

    const modules: Record<'mgt_calc' | 'mgt_budget_calc' | 'immo_rates', string | null> = config.modules;

    console.log(config.id);
    console.log(config.app_name);
    console.log(config.css_version);

    if(config.online) {
      switch (config.modules.mgt_calc) {
        case '1.0':;
          this.doExampleOneComponent(`1.0`);
          break;
        case '2.0':
          this.doExampleOneComponent(`2.0`);
          break;
        default:
          // this.doExampleOneComponent('default');
      }

      switch (config.modules.immo_rates) {
        case '1.0':;
          this.doExampleTwoComponent(`1.0`);
          break;
        case '2.0':
          this.doExampleTwoComponent(`2.0`);
          break;
        default:
        // this.doExampleTwoComponent('default');
      }

      switch (config.modules.mgt_budget_calc) {
        case '1.0':;
          this.doExampleThreeComponent(`1.0`);
          break;
        case '2.0':
          this.doExampleThreeComponent(`2.0`);
          break;
        default:
        // this.doExampleThreeComponent('default');
      }
    }
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

  private doExampleThreeComponent(param: any): void {
    this.exampleThreeComponentFactory = this.factoryResolver.resolveComponentFactory(ExampleThreeComponent);
    this.exampleThreeComponentRef = this.exampleThreeComponentFactory.create(this.viewContainerRef.injector);

    this.renderer.setProperty(this.exampleThreeComponentRef.instance, 'config', param);
    this.renderer.addClass(this.exampleThreeComponentRef.location.nativeElement, 'cool');
    this.renderer.setStyle(this.exampleThreeComponentRef.location.nativeElement, 'color', 'pink');

    this.viewContainerRef.insert(this.exampleThreeComponentRef.hostView);
  }
}
