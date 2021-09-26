import { KeycloakTokenParsed } from 'keycloak-js';

export interface FooListInterface extends KeycloakTokenParsed {
  avatar_url: string;
  name: string;
  config: FooListConfigInterface;
}

export interface FooListConfigInterface {
  id: number;
  online: boolean;
  app_name: string;
  css_version: string;
  lang: string;
  modules: Record<'mgt_calc' | 'mgt_budget_calc' | 'immo_rates', string | null>;
}
