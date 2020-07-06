import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logged = false;
  title = 'frontend';
  constructor(public userService: UserService) { }
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
      this.logged = true;
    else
      this.logged = false;
    }
    
}
