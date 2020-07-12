import { Injectable } from '@angular/core';
import { ReserveEvent } from './reserveevent.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReserveEventService {

  constructor(private http : HttpClient) { }

  addreserveEvent( reserveevent:ReserveEvent ){
    return this.http.post('http://localhost:8080/api/addreserveevent',reserveevent);
  }
  /*
  updateRB( reservebook:ReserveBook ){
    return this.http.post('http://localhost:8080/api/updatereservebook',reservebook);
  }*/
  
  getAllReserveevents(){
    return this.http.get('http://localhost:8080/api/allreserveevent');
  }
  
  removereserveEvent(id){
    return this.http.post('http://localhost:8080/api/deletereserveevent',id);
  }
  getCoursreserveEvent(id){
    return this.http.get('http://localhost:8080/api/alluserreserveevent?id='+id);
  }


}
