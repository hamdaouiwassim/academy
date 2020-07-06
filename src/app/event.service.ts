import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) {
    
  }
  baseUrl = 'http://localhost:8080';
  get(){
   return this.http.get(this.baseUrl + '/api/getEvents');
 }
  post(data){
    return this.http.post(this.baseUrl + '/api/SaveEvent',data);
  }
  update(data){
   return this.http.post(this.baseUrl + '/api/UpdateEvent',data);
 }
 delete(id){
   return this.http.post(this.baseUrl + '/api/DeleteEvent',id);
 }
}
