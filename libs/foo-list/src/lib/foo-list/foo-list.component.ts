import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { pick } from 'ramda';

@Component({
  selector: 'multi-tenant-ng-app-foo-list',
  templateUrl: './foo-list.component.html',
  styleUrls: ['./foo-list.component.scss']
})
export class FooListComponent implements OnInit {
  constructor(private readonly renderer: Renderer2, private readonly el: ElementRef, private readonly keycloakService: KeycloakService) {
    console.log('*** FooListComponent ***');
  }

  ngOnInit(): void {
    // Do stuff with Renderer2 and the config from keycloak
    const idTokenParsed = this.keycloakService.getKeycloakInstance().idTokenParsed;
    const idTokenParsedNamePicked = pick(['name'], idTokenParsed);
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText(`Hello world from BarListComponent by ${JSON.stringify(idTokenParsedNamePicked)}`);

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}
