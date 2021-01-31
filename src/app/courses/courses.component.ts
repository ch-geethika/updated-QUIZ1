import { Component, OnInit } from '@angular/core';
import { Icourse } from '../classes/icourse';
import {QuizService} from '../services/quiz.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course: Icourse[] = [];
  constructor(private quizservice:QuizService) { }

  ngOnInit(): void {
  
      console.log("hi");
      this.quizservice.getcourses().subscribe((data: Icourse[])=>{
        console.log(data);
          this.course = data;
      })  
    
  }

}
