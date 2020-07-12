import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReserveBook } from './reservebook.model';

@Injectable({
  providedIn: 'root'
})
export class ReservebookService {

  constructor(private http : HttpClient) { }

  addRB( reservebook:ReserveBook ){
    return this.http.post('http://localhost:8080/api/addreservebook',reservebook);
  }
  /*
  updateRB( reservebook:ReserveBook ){
    return this.http.post('http://localhost:8080/api/updatereservebook',reservebook);
  }*/
  
  getAllReservebooks(){
    return this.http.get('http://localhost:8080/api/allreservebook');
  }
  
  removeRB(id){
    return this.http.post('http://localhost:8080/api/deletereservebook',id);
  }
  getuserreservebook(id){
    return this.http.get('http://localhost:8080/api/alluserreservebook?id='+id);
  }



}



