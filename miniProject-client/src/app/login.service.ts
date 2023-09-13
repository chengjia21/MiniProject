import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient)
  // constructor() { }


  postLoginData(postData: { title: string; content: string }) {
    return this.http.post('/api/login', postData);
    
  };



  postComments(postData: { title: string; content: string }) {
    return this.http.post('/api/comment', postData);
    
  };


}
