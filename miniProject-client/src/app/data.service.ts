import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Wines } from './models/wines.model';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor() { }

  private http2 = inject(HttpClient)



  getAllProducts() {
    return this.http2.get<any>('https://www.heavenlygrovewinery.com/api/allproducts');

  };



  // postComments(postData: { title: string; content: string }) {
  //   return this.http.post('/api/comment', postData);

  // };



  // // testing apis
  // getWeather(city: string, key: string): Promise<any> {
  //   const params = new HttpParams()
  //     .set('q', city)
  //     .set('appid', key);

  //   return (lastValueFrom(this.http2.get<any>(
  //     'https://api.openweathermap.org/data/2.5/weather',
  //     {params: params})));
  // }
}
