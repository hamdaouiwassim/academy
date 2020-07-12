import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { ReserveEventService } from 'src/app/shared/reserveEvent/reserve-event.service';
import { ReserveEvent } from 'src/app/shared/reserveEvent/reserveevent.model';
import { UserService } from 'src/app/shared/user.service';
import { ListeAttenteEvent } from 'src/app/shared/listeattenteevent/listeattenteevent.model';

import { ListeattenteeventService } from 'src/app/shared/listeattenteevent/listeattenteevent.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  userDetails ;
  message : String;
  event : Event = new Event();
  reserveE : ReserveEvent = new ReserveEvent();
  attenteE : ListeAttenteEvent = new ListeAttenteEvent();

  events : any;
  constructor(private eventsService : EventService , private serviceEvents : EventService , private attenteEventService : ListeattenteeventService ,private userService : UserService , private reserveEventService : ReserveEventService) { }

  ngOnInit(): void {
    this.getEvents();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
  }


  reserveEvent(id,numberplace){
    console.log(numberplace);
    if (numberplace > 0 ){ 

      
      // reserve Event
        this.reserveE.idevent = id;
        this.reserveE.iduser = this.userDetails._id;
        console.log(this.reserveE);
        this.reserveEventService.addreserveEvent(this.reserveE).subscribe(res=>{
          console.log(res);
        },err=>{
              console.log(err);
        })
        this.message = 'Reservation de l\'evenement a ete effectue';
        // change number place event 
        this.event._id = id;
        this.event.placenumber = numberplace - 1 ; 
        this.serviceEvents.updateNumPlace(this.event).subscribe(res=>{
          console.log(res);
      },err=>{
        console.log(err);
      })
        
    }else{ // add to waiting list
      this.attenteE.idevent = id;
      this.attenteE.iduser = this.userDetails._id;
      this.attenteEventService.addARE(this.attenteE).subscribe(res=>{

      },err=>{

      })
      this.message = 'Votre demande a ete ajoutee dans la liste d\'attente';
    }
         
  }
  getEvents(){
    this.eventsService.get().subscribe(
      res=>{
        this.events = res;
      },err=>{
        console.log(err);
      
    })
  }

}

class Event{
  _id : String;
  name : String;
  description : String;
  placenumber : Number;
  eventdate : Boolean;

}
