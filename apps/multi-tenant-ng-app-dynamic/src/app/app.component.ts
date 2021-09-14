import { Component, HostBinding, OnInit } from '@angular/core';

import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';

@Component({
  selector: 'multi-tenant-ng-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'multi-tenant-ng-app-dynamic';

  @HostBinding('class.theme-client1') public client1Theme: boolean;
  @HostBinding('class.theme-client2') public client2Theme: boolean;

  constructor(private readonly tenantService: TenantService) {
    this.client1Theme = false;
    this.client2Theme = false;
  }

  ngOnInit(): void {
    this.enableThemes();
  }

  private enableThemes(): void {
    const tenant: string = this.tenantService.getTenant();

    console.log(tenant);

    this.client1Theme = tenant === TenantEnum.CLIENT01;
    this.client2Theme = tenant === TenantEnum.CLIENT02;
  }
}
