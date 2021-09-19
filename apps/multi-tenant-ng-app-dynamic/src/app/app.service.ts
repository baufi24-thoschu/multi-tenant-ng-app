import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppEnum } from './app.enum';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly apiObservable: Observable<any>;

  constructor(private http: HttpClient, private readonly keycloakService: KeycloakService) {
    this.apiObservable = this.http.get('/api/');
  }

  public getFromApi(): void {
    this.apiObservable.subscribe((result: any) => {
      window.console.dir(result);
    },(err: Error) => window.console.error(err));
  }

  public getFromCustom(path: AppEnum): void {
    this.http.get(path).subscribe((result: any) => {
      window.console.dir(result);
    },(err: Error) => console.error(err));
  }
}

