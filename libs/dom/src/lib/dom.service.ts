import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class DomService {
  private readonly url: string;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this.url = document.URL;
  }

  public getLocation(): Location {
    return this.document.location;
  }

  public getWindow(): Window | null {
    return this.document.defaultView;
  }

  public getBody(): HTMLElement {
    return this.document.body;
  }
}
