import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";

import { TenantModule } from '@multi-tenant-ng-app/tenant';
import { SayHelloModule } from '@multi-tenant-ng-app/say-hello';
import { NavigationModule } from '@multi-tenant-ng-app/navigation';
import { IamModule } from '@multi-tenant-ng-app/iam';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, HttpClientModule, RouterModule,
    SayHelloModule, TenantModule, NavigationModule,
    IamModule.forRoot(environment.keycloak)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
