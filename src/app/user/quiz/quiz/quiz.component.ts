import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/shared/quiz/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { ResponseService } from 'src/app/shared/response/response.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizuComponent implements OnInit {
  quizs :any = [];
  message : String = '';
  constructor(private router : ActivatedRoute ,private quizservice: QuizService , private responseService : ResponseService) 
  { 

  }

  ngOnInit(): void {
  
    const id= this.router.snapshot.params.id;
  
    this.quizservice.getCoursQuiz(id).subscribe((res)=>{
      // @ts-ignore
      res.forEach(elem=>{
        this.getResponses(elem._id).subscribe(resp=>{
          this.quizs.push({
            'question':elem.question,
            'reponses':resp
          })
        })
        
      })
      //console.log(res);
      //this.getResponses(res[0]._id);
    }, (err)=>{
      console.log(err)
    })
  }
  getResponses(id){
    return this.responseService.getQuizsResponses(id)

  }
  submitq(){
    this.message = "Quiz validee merci !!";
    setTimeout(()=>{
      this.message = '';

    },3000)
  }

}
