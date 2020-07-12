import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {
    
   }
   baseUrl = 'http://localhost:8080';
   
   get(){
    return this.http.get(this.baseUrl + '/api/getbooks');
  }
   post(data){
     return this.http.post(this.baseUrl + '/api/SaveBook',data);
   }
   update(data){
    return this.http.post(this.baseUrl + '/api/UpdateBook',data);
  }
  updateDispo(data){
    return this.http.post(this.baseUrl + '/api/UpdateBookDisponible',data);
  }
  delete(id){
    return this.http.post(this.baseUrl + '/api/DeleteBook',id);
  }
}
