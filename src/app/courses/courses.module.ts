import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ]
})
export class CoursesModule { }
