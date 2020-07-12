import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import { UserService } from 'src/app/shared/user.service';
import { ReservebookService } from 'src/app/shared/reservebook/reservebook.service';
import { ReserveBook } from 'src/app/shared/reservebook/reservebook.model';
import { ListeattentebookService } from 'src/app/shared/listeattentebook/listeattentebook.service';
import { ListeAttenteBook } from 'src/app/shared/listeattentebook/listeattentebook.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  userDetails ;
  books :any;
  message : String;
  book : Book = new Book();
  reserveb : ReserveBook = new ReserveBook();
  attenteb : ListeAttenteBook = new ListeAttenteBook();
  iduser = {'iduser':''};
  constructor(private serviceBooks : BookService , private attenteService : ListeattentebookService ,private userService : UserService , private reserveBookService : ReservebookService ) { }

  ngOnInit(): void {
    this.getbooks();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
      },
      err => { 
        console.log(err);
        
      }
    );
   
  }
  getbooks(){
    this.serviceBooks.get().subscribe(res=>{
      this.books = res ;
            console.log(this.books);
        },error=>{
            console.log(error);
        });

  }
  reserveBook(id,dispo){
     //  book reserved in day
     this.iduser.iduser = this.userDetails._id;
     this.reserveBookService.getuserreservebook(this.iduser).subscribe(res=>{
              console.log(res);
        },err=>{

        })
    if (dispo){

         

          this.reserveb.idbook = id;
          this.reserveb.iduser = this.userDetails._id;
          console.log(this.reserveb);
          this.reserveBookService.addRB(this.reserveb).subscribe(res=>{
            console.log("cool");
            console.log(res);
          },err=>{
            console.log("erreur");
            console.log(err);
          })
          this.book._id = id;
          this.book.disponible = false; 
          this.serviceBooks.updateDispo(this.book).subscribe(res=>{
              console.log(res);
          },err=>{
            console.log(err);
          })
          this.message = 'Reservation de livre a ete effectue';
          // changer le champ diponible pour le livre 
      }else{
          //ajouter la reservation dans la liste d'attente
          this.attenteb.idbook = id;
          this.attenteb.iduser = this.userDetails._id;
          this.attenteService.addARB(this.attenteb).subscribe(res=>{

          },err=>{

          })
          this.message = 'Votre demande a ete ajoutee dans la liste d\'attente';
      }
    
  }

}

class Book{
  _id : String;
  name : String;
  description : String;
  addeddate : Date;
  disponible : Boolean;

}