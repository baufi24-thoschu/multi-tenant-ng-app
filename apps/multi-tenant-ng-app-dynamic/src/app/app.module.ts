import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from "@angular/router";

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { TenantModule } from '@multi-tenant-ng-app/tenant';
import { SayHelloModule } from '@multi-tenant-ng-app/say-hello';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, KeycloakAngularModule, SayHelloModule, TenantModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (keycloak: KeycloakService): () => void => {
        return (): void => {
          keycloak
            .init({
              config: {
                url: `${environment.keycloak}/auth`,
                realm: 'baufi24',
                clientId: 'ng-dynamic'
              },
              initOptions: {
                onLoad: 'login-required',
                flow: 'implicit'
              }
            })
            .then((res: boolean) => console.log(`KeycloakInit: ${res}`))
            .then(() => {
              console.log(keycloak.getKeycloakInstance().idTokenParsed);
            })
            .catch((err: Error) => console.error(`Error KeycloakInit: ${err}`));
        }
      },
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log(`${environment.keycloak}/auth`);
  }
}
