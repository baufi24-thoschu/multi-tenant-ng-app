import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly getObservable: Observable<any>;

  public constructor(private http: HttpClient) {
    this.getObservable = this.http.get('/api/');
  }

  public getFromApi(): void {
    this.getObservable.subscribe((foo)=> {
      console.log(foo);
    }, err => console.error(err));
  }
}
