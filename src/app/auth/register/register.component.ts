import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers :[UserService]
})
export class RegisterComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  showSucessMessage : boolean;
  serverErrorMessage : String;
  constructor(public userService: UserService,private router : Router) { }

  ngOnInit(): void {
    
  }
  onSubmit(form : NgForm){
     this.userService.postUser(form.value).subscribe(
          res =>{
              this.showSucessMessage = true;
              setTimeout(()=> this.showSucessMessage = false,4000);
              this.resetForm(form);
            },
          err => {
            if(err.status == 422){
              this.serverErrorMessage = err.error.join('<br/>');
              
            }else{
              this.serverErrorMessage = 'un probleme quelque part , contacter l\'administartion.';
            }

          }
     );
      
  }
  resetForm(form : NgForm ){
    this.userService.selectedUser = {
      fullname : '',
      email : '',
      password : '',
      role:''
    };
    form.resetForm();
    this.serverErrorMessage = '';
    this.router.navigate(['me/books']);
    window.location.reload();

  }

}
