import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ModalModule.forRoot()
  ]
})
export class BooksModule { }
