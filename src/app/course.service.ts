import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {
    
  }
  baseUrl = 'http://localhost:8080';
  get(){
   return this.http.get(this.baseUrl + '/api/getCourses');
 }
  post(data){
    return this.http.post(this.baseUrl + '/api/SaveCourse',data);
  }
  update(data){
   return this.http.post(this.baseUrl + '/api/UpdateCourse',data);
 }
 delete(id){
   return this.http.post(this.baseUrl + '/api/DeleteCourse',id);
 }
}
