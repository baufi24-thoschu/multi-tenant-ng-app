import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';

import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';
import { SayHelloService } from '@multi-tenant-ng-app/say-hello';

import { AppService } from './app.service';
import { AppEnum } from './app.enum';

@Component({
  selector: 'multi-tenant-ng-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  private static readonly text: string = 'Tom S.';
  public title = 'multi-tenant-ng-app-dynamic';

  @HostBinding('class.theme-client1') public client1Theme: boolean;
  @HostBinding('class.theme-client2') public client2Theme: boolean;

  constructor(
    private readonly tenantService: TenantService,
    private readonly appService: AppService,
    private readonly sayHelloService: SayHelloService
  ) {
    this.client1Theme = false;
    this.client2Theme = false;
  }

  ngOnInit(): void {
    this.enableThemes();
    this.appService.getFromApi();
  }

  ngAfterViewInit(): void {
    if (this.tenantService.getTenant() === TenantEnum.CLIENT01) {
      this.appService.getFromCustom(AppEnum.posts);
    } else if (this.tenantService.getTenant() === TenantEnum.CLIENT02) {
      this.appService.getFromCustom(AppEnum.profile);
    } else {
      this.appService.getFromCustom(AppEnum.comments);
    }

    console.log(this.sayHelloService.sayHello(AppComponent.text));
  }

  private enableThemes(): void {
    const tenant: string = this.tenantService.getTenant();

    this.client1Theme = tenant === TenantEnum.CLIENT01;
    this.client2Theme = tenant === TenantEnum.CLIENT02;

    for (const item in TenantEnum) {
      if (isNaN(Number(item))) {
        // console.log(item);
        // console.log(tenant);
      }
    }
  }
}
