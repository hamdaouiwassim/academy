import { Injectable } from '@angular/core';
import { ListeAttenteEvent } from './listeattenteevent.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListeattenteeventService {

  constructor(private http : HttpClient) { }

  addARE( listeattenteevent:ListeAttenteEvent ){
    return this.http.post('http://localhost:8080/api/addattenteevent',listeattenteevent);
  }
  /*
  updateRB( reserveevent:Reserveevent ){
    return this.http.post('http://localhost:8080/api/updatereserveevent',reserveevent);
  }*/
  
  allListeAttenteEvents(){
    return this.http.get('http://localhost:8080/api/allattenteevent');
  }
  
  removeARE(id){
    return this.http.post('http://localhost:8080/api/deleteattenteevent',id);
  }
  allListeAttenteEventsUser(id){
    return this.http.get('http://localhost:8080/api/allattenteuserevent?id='+id);
  }
}
