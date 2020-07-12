import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { BookService } from 'src/app/book.service';
import { UserService } from 'src/app/shared/user.service';
import { ReserveEventService } from 'src/app/shared/reserveEvent/reserve-event.service';
import { ReservebookService } from 'src/app/shared/reservebook/reservebook.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private eventsService : EventService , private booksService : BookService , private usersService : UserService  , private reservebookService : ReservebookService , private  reserveeventService : ReserveEventService) { }
  reservebooks : any;
  reserveevents : any;
  users : any;
  events : any;
  books : any;

  ngOnInit(): void {
    this.getreservebook();
    this.getreserveevent();
    this.getBooks();
    this.getEvents();
    this.getUsers();
  }

  getreservebook(){
    this.reservebookService.getAllReservebooks().subscribe(res=>{
       this.reservebooks = res; 
    },err=>{

    })
  }
  
  getreserveevent(){
    this.reserveeventService.getAllReserveevents().subscribe(res=>{
       this.reserveevents = res; 
    },err=>{

    })
  }
  getUsers(){
    this.usersService.getallusers().subscribe(res=>{
      this.users = res;
      console.log(res);
    },err=>{
      
    })
    
  }

  getBooks(){
    this.booksService.get().subscribe(res=>{
      this.books = res;
      console.log(res);
    },err=>{
      
    })
    
  }

  getEvents(){
    this.eventsService.get().subscribe(res=>{
      this.events = res;
      console.log(res);
    },err=>{
      
    })
    
  }


}
