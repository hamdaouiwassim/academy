import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class QuizService {

  constructor(private http : HttpClient) { }
  addQ( quiz:Quiz ){
    return this.http.post('http://localhost:8080/api/addquiz',quiz);
  }
  
  getAllQuizs(){
    return this.http.get('http://localhost:8080/api/allquiz');
  }

  
}
