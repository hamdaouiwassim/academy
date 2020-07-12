import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses : any;
  constructor(private courseService : CourseService ) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.courseService.get().subscribe(res=>{
        this.courses = res;
    },err=>{
        console.log();
    }
    )
  }


}
