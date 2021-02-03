import { Component, OnInit } from '@angular/core';
import { Icourse } from '../classes/icourse';
import {QuizService} from '../services/quiz.service';
import {CoursesInfoComponent} from '../courses-info/courses-info.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Icourse[] = [];
  Courseid: number;
  constructor(private quizservice:QuizService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    
      console.log("hi");
      this.quizservice.getAllCourses().subscribe((data: Icourse[])=>{
        console.log(data);
          this.courses = data;
    })
  
  }
  // onSubmit(){
   
  //   for(var l of this.courses)
  //   {
  //   if(l == Icourse[0])
  //   {
     
  //   }
  //   console.log("hey");
  //   console.log(l);
   
  // }
}
      
      
  


