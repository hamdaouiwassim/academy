import { Component, OnInit } from '@angular/core';
import { ListeattentebookService } from 'src/app/shared/listeattentebook/listeattentebook.service';
import { ListeattenteeventService } from 'src/app/shared/listeattenteevent/listeattenteevent.service';
import { UserService } from 'src/app/shared/user.service';
import { EventService } from 'src/app/event.service';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-attente-list',
  templateUrl: './attente-list.component.html',
  styleUrls: ['./attente-list.component.css']
})
export class AttenteListComponent implements OnInit {

  constructor(private eventsService : EventService , private booksService : BookService , private usersService : UserService  , private attentebookService : ListeattentebookService , private  attenteeventService : ListeattenteeventService ) { }
  attentebooks : any;
  attenteevents : any;
  users : any;
  events : any;
  books : any;
  ngOnInit(): void {
    this.getattentebook();
    this.getattenteevent();
    this.getUsers();
    this.getBooks();
    this.getEvents();

  }
  getattentebook(){
    this.attentebookService.allListeAttenteBooks().subscribe(res=>{
       this.attentebooks = res; 
    },err=>{

    })
  }
  
  getattenteevent(){
    this.attenteeventService.allListeAttenteEvents().subscribe(res=>{
       this.attenteevents = res; 
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
