import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route} from '@angular/router';
import {StarttestComponent} from '../starttest/starttest.component';

import {QuizService} from '../services/quiz.service';
import {Iquestions} from '../classes/iquestions';
import { Icourse } from '../classes/icourse';
@Component({
  selector: 'app-courses-info',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.css']
})
export class CoursesInfoComponent implements OnInit {
  courses : Icourse[] = [];
  constructor(private quizservice:QuizService,private router:ActivatedRoute) { }



  ngOnInit(): void {
    console.log("hi");
    this.quizservice.getcourses(this.router.snapshot.params['Course_id']).subscribe((data: Icourse[])=>{
      console.log(data);
        this.courses = data;
    }) 
  
}
}
