import { Host, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppEnum } from './app.enum';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly apiObservable: Observable<any>;

  constructor(@Host() private readonly http: HttpClient) {
    this.apiObservable = http.get('/api/');
  }

  public getFromApi(): void {
    this.apiObservable.subscribe((result: any) => {
      // ToDo
      console.dir(result);
    },(err: Error) => console.error(err));
  }

  public getFromCustom(path: AppEnum): void {
    this.http.get(path).subscribe((result: any) => {
      // ToDo
      console.dir(result);
    },(err: Error) => console.error(err));
  }
}

