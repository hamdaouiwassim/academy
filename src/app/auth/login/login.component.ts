import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {

     

  }
  model ={
    email :'',
    password:''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        console.log(res);
        this.userService.setToken(res['token']);
        this.userService.setRole(res['user'].role);
        this.router.navigate(['me/books']);
        window.location.reload();
      },
      err => {
        this.serverErrorMessages = err.error.message;
        console.log(err);
      }
    );
  }

}









