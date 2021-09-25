import { KeycloakTokenParsed } from 'keycloak-js';

export interface FooListInterface extends KeycloakTokenParsed {
  avatar_url: string;
  name: string;
  config: Record<'foo' | 'bar' | 'baz', string>;
}
