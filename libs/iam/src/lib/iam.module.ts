import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { KeycloakAngularModule, KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { KeycloakConfig, KeycloakInitOptions } from 'keycloak-js';

import { IamInterceptor } from './iam.interceptor';

@NgModule({
  imports: [CommonModule, KeycloakAngularModule]
})
export class IamModule {
  private static readonly initOptions: KeycloakInitOptions = { onLoad: 'login-required', flow: 'implicit' };

  public static forRoot(keycloakEnvironment: KeycloakConfig): ModuleWithProviders<IamModule> {
    return {
      ngModule: IamModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: (keycloakService: KeycloakService): () => void => {
            const promiseResolveText = 'KeycloakInit:';
            const promiseRejectText = 'Error KeycloakInit:';

            return async (): Promise<void> => {
              await keycloakService
                .init(IamModule.getKeycloakInitOptions(keycloakEnvironment))
                .then((res: boolean) => window.console.info(`${promiseResolveText} ${res}`))
                .catch((err: Error) => console.error(`${promiseRejectText} ${err}`));
            };
          },
          multi: true,
          deps: [KeycloakService]
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: IamInterceptor,
          multi: true
        }
      ]
    };
  }

  private static getKeycloakInitOptions(keycloakEnvironment: KeycloakConfig): KeycloakOptions {
    return {
      config: IamModule.getKeycloakConfig(keycloakEnvironment),
      initOptions: IamModule.initOptions
    };
  }

  private static getKeycloakConfig(keycloakEnvironment: KeycloakConfig): KeycloakConfig {
    return {
      url: `${keycloakEnvironment.url}/auth`,
      realm: keycloakEnvironment.realm,
      clientId: keycloakEnvironment.clientId
    };
  }
}
