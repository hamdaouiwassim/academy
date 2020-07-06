import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  today =  new Date();
  tomorrow =  new Date(this.today.setDate(this.today.getDate() + 1));
  modalRef: BsModalRef;
  event : Event = new Event();
  events :any;
  editevent : any;
  errorMsg : errorMsg = new errorMsg();
  id = {'id':''};
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: TemplateRef<any>,event) {
    this.modalRef = this.modalService.show(template);
    this.editevent = event;
  }
  openModalDelete(template: TemplateRef<any>,id) {
    this.id.id = id;
    this.modalRef = this.modalService.show(template);
    
  } 
  constructor(private modalService: BsModalService ,private eventservice : EventService) { }

  ngOnInit(): void {
    this.getevents();
  }
  onsave(){
    this.errorMsg.name = this.errorMsg.description = this.errorMsg.placenumber = this.errorMsg.eventdate = '';
    
    !this.event.name ? this.errorMsg.name ='le nom est obligatoire':'';
    !this.event.description ? this.errorMsg.description ='l\' description est obligatoire':'';
    !this.event.placenumber ? this.errorMsg.placenumber ='le nombre de place est obligatoire':'';
    !this.event.eventdate ? this.errorMsg.eventdate ='la date de l\'evenement est obligatoire':'';
    
    if (!this.event.name || !this.event.description || !this.event.placenumber || !this.event.eventdate  ){
      return ;

    }
   
    console.log(this.event);
    this.eventservice.post(this.event).subscribe(res=>{
      this.getevents();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }
  onUpdate(){
    console.log(this.event);
    
    this.eventservice.update(this.editevent).subscribe(res=>{
      this.getevents();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });
    
  }
  getevents(){
    this.eventservice.get().subscribe(res=>{
      this.events = res ;
            console.log(this.events);
        },error=>{
            console.log(error);
        });

  }
  delete(){
    this.eventservice.delete(this.id).subscribe(res=>{
      this.getevents();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }

}
class Event {
  name : String;
  description : String;
  placenumber : Number;
  eventdate : Date;
  addeddate : Date;

}

class errorMsg {
  name : String;
  description : String;
  placenumber : String;
  eventdate : String;
  
}
