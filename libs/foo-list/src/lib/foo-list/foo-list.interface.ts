import { KeycloakTokenParsed } from 'keycloak-js';

export interface FooListInterface extends KeycloakTokenParsed {
  avatar_url: string;
  name: string;
  config: Record<'foo1' | 'bar1' | 'baz1', string | Record<'foo2' | 'bar2' | 'baz3', string | number | boolean>>;
}
