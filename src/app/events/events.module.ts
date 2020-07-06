import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class EventsModule { }
