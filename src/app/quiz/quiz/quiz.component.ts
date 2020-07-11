import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { QuizService } from 'src/app/shared/quiz/quiz.service';
import { Quiz } from 'src/app/shared/quiz/quiz.model';
import { ResponseService } from 'src/app/shared/response/response.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  modalRef: BsModalRef;

  /** Quiz */
  quiz : Quiz = new Quiz();
  quizs :any;
  editquiz : any;
  model  = {
    idcour :'',
    question:''
  };
  id = {'id':''};
  /** responses */
  response : Response = new Response();
  responses :any;
  editresponse : any;
  modelR  = {
    idquiz :'',
    response:'',
    state : false
  };
  idq = {'id':''};

  constructor(private modalService: BsModalService , private responseService : ResponseService ,private router : ActivatedRoute , private quizService : QuizService  ) { }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: TemplateRef<any>,quiz ) {
    this.modalRef = this.modalService.show(template);
    this.editquiz  = quiz ;
  }
  openModalDelete(template: TemplateRef<any>,id) {
    this.id.id = id;
    this.modalRef = this.modalService.show(template);
    
  } 

  /** response */
  openAddRModal(template: TemplateRef<any>,idquiz){
    this.modelR.idquiz = idquiz;
    //this.getAllR(idquiz);
    console.log(this.modelR);
    this.modalRef = this.modalService.show(template);
  }
  openListRModal(template: TemplateRef<any>,idquiz){
    this.idq.id = idquiz;
    this.getAllR(idquiz);
    this.modalRef = this.modalService.show(template);
  }
  openModalDeleteR(template: TemplateRef<any>,id) {
    this.idq.id = id;
    
    this.modalRef = this.modalService.show(template);
    
  } 
  ngOnInit(): void {
    //console.log(this.router.snapshot.params);
    this.model.idcour = this.router.snapshot.params.id;
    //console.log("oups ==> get all");
    this.getAllQ(this.router.snapshot.params.id);
    
  }

  onSubmit(form : NgForm){
    this.quizService.addQ(form.value).subscribe(
      res => {
        this.getAllQ(this.model.idcour);
  //      this.resetModel();
        this.modalRef.hide();

      },
      err => {
      }
    );
  }

  getAllQ(idcours){

    this.quizService.getCoursQuiz(idcours).subscribe(
      
      res => {
        this.quizs = res ;
        
      },
      err => {
      }
    );
  }

  onUpdate(){
    console.log(this.quiz);
    this.quizService.updateQ(this.editquiz).subscribe(res=>{
      this.getAllQ(this.model.idcour);
//      this.resetModel();
      this.modalRef.hide()
        },error=>{
        });
    
  }
  delete(){
    this.quizService.removeQ(this.id).subscribe(res=>{
      this.getAllQ(this.model.idcour);
      this.modalRef.hide();
        },error=>{
        });

  }

  /** Responses */
  getAllR(idquiz){
    this.responseService.getQuizsResponses(idquiz).subscribe(
      
      res => {
        this.responses = res ;
        
      },
      err => {
      }
    );
  }
  onAddResponse(form : NgForm){
    this.responseService.addR(form.value).subscribe(
      res => {
        console.log("here we go");
        //this.getAllR(this.model.idcour);
        //form.reset();
        this.resetModelR();
        
        this.modalRef.hide();

      },
      err => {
        console.log(err);
      }
    );
  }
  deleteR(){
    this.responseService.removeR(this.idq).subscribe(res=>{
     //this.getAllR(this.router.snapshot.params.id);
      this.modalRef.hide();
        },error=>{
        });
  }


    resetModelR(){
      this.modelR = {
        idquiz : '', 
        response:'',
        state : false
      };
    }


}
