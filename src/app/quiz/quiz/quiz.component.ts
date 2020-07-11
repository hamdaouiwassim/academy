import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuizService } from 'src/app/shared/quiz/quiz.service';
import { Quiz } from 'src/app/shared/quiz/quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  modalRef: BsModalRef;
  quiz : Quiz = new Quiz();
  quizs :any;
  editquiz : any;
  model  = {
    idcour :'',
    question:''
  };
  constructor(private modalService: BsModalService , private router : ActivatedRoute , private quizService : QuizService  ) { }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {
    //console.log(this.router.snapshot.params);
    this.model.idcour = this.router.snapshot.params.id;
    console.log("oups ==> get all");
    this.getAllQ();
    
  }

  onSubmit(form : NgForm){
    this.quizService.addQ(form.value).subscribe(
      res => {
        console.log("cool added");

      },
      err => {
        console.log(" why this happen");
      }
    );
  }

  getAllQ(){

    this.quizService.getAllQuizs().subscribe(
      
      res => {
        this.quizs = res ;
        console.log("success");
        console.log(res);
        
      },
      err => {
        console.log("erreur");
        console.log(err);
      }
    );
  }

}
