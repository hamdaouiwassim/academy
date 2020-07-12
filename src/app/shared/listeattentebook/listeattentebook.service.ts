import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListeAttenteBook } from './listeattentebook.model';

@Injectable({
  providedIn: 'root'
})
export class ListeattentebookService {

  constructor(private http : HttpClient) { }

  addARB( listeattentebook:ListeAttenteBook ){
    return this.http.post('http://localhost:8080/api/addattentebook',listeattentebook);
  }
  /*
  updateRB( reservebook:ReserveBook ){
    return this.http.post('http://localhost:8080/api/updatereservebook',reservebook);
  }*/
  
  allListeAttenteBooks(){
    return this.http.get('http://localhost:8080/api/allattentebook');
  }
  
  removeARB(id){
    return this.http.post('http://localhost:8080/api/deleteattentebook',id);
  }
  allListeAttenteBooksUser(id){
    return this.http.get('http://localhost:8080/api/allattenteuserbook?id='+id);
  }

}
