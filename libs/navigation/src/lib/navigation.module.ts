import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Route, Router } from '@angular/router';

import { TenantEnum, TenantService } from '@multi-tenant-ng-app/tenant';

const routes: Routes = [
  { path: '', redirectTo: '/foo', pathMatch: 'full' },
  { path: 'foo', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/foo-list').then(m => m.FooListModule) },
  { path: 'bar', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/bar-list').then(m => m.BarListModule) },
  { path: '**', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/baz-list').then(m => m.BazListModule) }
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
          { path: 'default', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/foo-list').then(m => m.FooListModule) }
        ];
        break;
      case TenantEnum.CLIENT02:
        this.appRoutes = [
          { path: 'default', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/baz-list').then(m => m.BazListModule) }
        ];
        break;
      default:
        this.appRoutes = [
          { path: 'default', pathMatch: 'prefix', loadChildren: () => import('@multi-tenant-ng-app/bar-list').then(m => m.BarListModule) }
        ];
    }

    this.appRoutes.forEach((route: Route) => this.router.config.unshift(route));
  }
}
