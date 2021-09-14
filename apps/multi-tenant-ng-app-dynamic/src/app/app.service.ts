import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly apiObservable: Observable<any>;

  public constructor(private http: HttpClient) {
    this.apiObservable = this.http.get('/api/');
  }

  public getFromApi(): void {
    this.apiObservable.subscribe((result: any) => {
      console.log(result);
    }, (err: Error) => console.error(err));
  }

  public getFromCustom(path: string): void {
    this.http.get(path).subscribe((result: any) => {
      console.log(result);
    }, (err: Error) => console.error(err));
  }
}
