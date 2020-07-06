import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  modalRef: BsModalRef;
  course : Course = new Course();
  courses :any;
  editcourse : any;
  errorMsg : errorMsg = new errorMsg();
  id = {'id':''};
  constructor(private modalService: BsModalService ,private courseservice : CourseService) { }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModalEdit(template: TemplateRef<any>,course) {
    this.modalRef = this.modalService.show(template);
    this.editcourse = course;
  }
  openModalDelete(template: TemplateRef<any>,id) {
    this.id.id = id;
    this.modalRef = this.modalService.show(template);
    
  } 

  ngOnInit(): void {
    this.getcourses();
  }

  onsave(){
    this.errorMsg.name = this.errorMsg.description = this.errorMsg.auther  = '';
    
    !this.course.name ? this.errorMsg.name ='le nom est obligatoire':'';
    !this.course.description ? this.errorMsg.description ='l\' description est obligatoire':'';
    !this.course.auther ? this.errorMsg.auther ='l\' auteur est obligatoire':'';
    
    if (!this.course.name || !this.course.description || !this.course.auther  ){
      return ;

    }
   
    console.log(this.course);
    this.courseservice.post(this.course).subscribe(res=>{
      this.getcourses();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }
  onUpdate(){
    console.log(this.course);
    
    this.courseservice.update(this.editcourse).subscribe(res=>{
      this.getcourses();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });
    
  }
  getcourses(){
    this.courseservice.get().subscribe(res=>{
      this.courses = res ;
            console.log(this.courses);
        },error=>{
            console.log(error);
        });

  }
  delete(){
    this.courseservice.delete(this.id).subscribe(res=>{
      this.getcourses();
      this.modalRef.hide();
            console.log(res);
        },error=>{
            console.log(error);
        });

  }

}

class Course{
  name : String;
  description : String;
  auther : String;
  document : String;

}

class errorMsg {
  name : String;
  description : String;
  auther : String;
  document : String;
}
