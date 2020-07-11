import { Injectable } from '@angular/core';
import { Response } from './response.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(private http : HttpClient) { }
  addR( response:Response ){
    return this.http.post('http://localhost:8080/api/addresponse',response);
  }
  
  updateR( response:Response ){
    return this.http.post('http://localhost:8080/api/updateresponse',response);
  }
  
  
  removeR(id){
    return this.http.post('http://localhost:8080/api/deleteresponse',id);
  }
  getQuizsResponses(id){
    return this.http.get('http://localhost:8080/api/allquizresponses?id='+id);
  }
}

