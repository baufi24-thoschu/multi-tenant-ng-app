import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { TenantModule } from '@multi-tenant-ng-app/tenant';
import { SayHelloModule } from '@multi-tenant-ng-app/say-hello';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, SayHelloModule, TenantModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
