import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route} from '@angular/router';
import {TestComponent} from '../test/test.component';
import {QuizService} from '../services/quiz.service';
import { Icourse } from '../classes/icourse';
@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {
 
  constructor(private quizservice:QuizService,private router:ActivatedRoute) { }
  courseid:number;

  
  ngOnInit(): void {
    // console.log("hi");
    // this.quizservice.getcourses(this.router.snapshot.params['Course_id']).subscribe((data: Icourse[])=>{
    //   console.log(data);
    //     this.courses = data;
    // })  
      this.courseid=this.router.snapshot.params['Course_id']
  }


}
