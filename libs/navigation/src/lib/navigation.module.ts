import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';

import { FooListComponent, FooListModule } from '@multi-tenant-ng-app/foo-list';
import { BarListComponent, BarListModule } from '@multi-tenant-ng-app/bar-list';
import { BazListComponent, BazListModule } from '@multi-tenant-ng-app/baz-list';
import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';

const routes: Routes = [
  { path: '', redirectTo: '/foo', pathMatch: 'full' },
  { path: 'foo', pathMatch: 'prefix', component: FooListComponent },
  { path: 'bar', pathMatch: 'prefix', component: BarListComponent },
  // { path: 'foo', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/foo-list').then(m => m.FooListModule) },
  // { path: 'bar', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/bar-list').then(m => m.BarListModule) },
  { path: '**', component: BazListComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
})
export class NavigationModule {
  private appRoutes: Routes;

  constructor(private router: Router, private readonly tenantService: TenantService) {
    switch(this.tenantService.getTenant()) {
      case TenantEnum.CLIENT01:
        this.appRoutes = [
          { path: 'default', pathMatch: 'prefix', component: FooListComponent }
        ];
        break;
      case TenantEnum.CLIENT02:
        this.appRoutes = [
          { path: 'default', pathMatch: 'prefix', component: BarListComponent },
        ];
        break;
      default:
        this.appRoutes = [
          { path: 'default', pathMatch: 'prefix', component: BazListComponent },
        ];
    }

    this.appRoutes.forEach(route => this.router.config.unshift(route));
  }
  public static forRoot(param: string): ModuleWithProviders<NavigationModule> {
    return {
      ngModule: NavigationModule,
      providers: [ ]
    }
  }
}
