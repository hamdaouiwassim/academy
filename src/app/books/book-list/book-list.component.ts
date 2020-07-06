import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  modalRef: BsModalRef;
  book : Book = new Book();
  books :any;
  editBook : any;
  errorMsg : errorMsg = new errorMsg();
  id = {'id':''};
  constructor(private modalService: BsModalService,private bookservice : BookService) {}
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: TemplateRef<any>,book) {
    this.modalRef = this.modalService.show(template);
    this.editBook = book;
  }
  openModalDelete(template: TemplateRef<any>,id) {
    this.id.id = id;
    this.modalRef = this.modalService.show(template);
    
  } 
  

  ngOnInit(): void {
    this.getbooks();
   
  }
  getbooks(){
    this.bookservice.get().subscribe(res=>{
      this.books = res ;
            console.log(this.books);
        },error=>{
            console.log(error);
        });

  }
  onsave(){
    this.errorMsg.name = this.errorMsg.description  = '';
    
    !this.book.name ? this.errorMsg.name ='le nom est obligatoire':'';
    !this.book.description ? this.errorMsg.description ='l\' description est obligatoire':'';

    
    if (!this.book.name || !this.book.description  ){
      return ;

    }
    this.book.addeddate = new Date();
    this.book.disponible = true;
    console.log(this.book);
    this.bookservice.post(this.book).subscribe(res=>{
      this.getbooks();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }
  
  onUpdate(){
    console.log(this.book);
    if ( this.editBook.disponible == "true" ){
      this.editBook.disponible == true;
    } else{
      this.editBook.disponible == false;
    }
    this.bookservice.update(this.editBook).subscribe(res=>{
      this.getbooks();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });
    
  }
  delete(){
    this.bookservice.delete(this.id).subscribe(res=>{
      this.getbooks();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }


}

class Book{
  name : String;
  description : String;
  addeddate : Date;
  disponible : Boolean;

}

class errorMsg {
  name : String;
  description : String;
  disponible : String;
}
