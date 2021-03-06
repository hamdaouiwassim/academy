import {Injectable} from '@angular/core';
import {User} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User = {
    fullname : '' ,
    email : '' ,
    password : '',
    role : ''
  }

  noAuthHeader = { headers: new HttpHeaders({ NoAuth : 'True' }) };
  constructor(private http: HttpClient) { }
  postUser( user: User ) {
    return this.http.post('http://localhost:8080/api/register',user,this.noAuthHeader);
  }
  login(authCredentials) {
    return this.http.post('http://localhost:8080/api/authenticate', authCredentials,this.noAuthHeader);
  }
  setRole(role){
    localStorage.setItem('role', role);
  }
  getUserProfile() {
    return this.http.get('http://localhost:8080/api/userProfile');
  }
  isadmin(){
    if (this.getrole()=='admin') {
      return true;
    }
    return false;
  }
  isuser(){
    if (this.getrole()=='user') {
      return true;
    }
    return false;
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getrole(){
    return localStorage.getItem('role');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  getUserPayload() {
      var token = this.getToken();
      if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;
    }

  isLoggedIn() {
    return this.isuser();
    /*
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;*/
  }
  getallusers(){
    return this.http.get('http://localhost:8080/api/getallusers');
  }
}


