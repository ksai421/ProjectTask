import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get('http://localhost:3000/posts');
  }
  post(req:any){
    return this.http.post('http://localhost:3000/posts',req);
  }


  gets(){
    return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story');
  }
  
}
