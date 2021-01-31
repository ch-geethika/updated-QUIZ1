import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {QuizService} from '../services/quiz.service';
import {Iquestions} from '../classes/iquestions';
import { Icourse } from '../classes/icourse';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  courses : Icourse[] = [];
  Questions : Iquestions[] = [];
  QNo:number;
  Marks:number;
  Courseid: number;
  Level_id:number;
   Question:Iquestions=
    {
      Question_id:null,
        Course_id:null,
        Level_id:null,
        Question_No:null,
        Question1:null,
        Option_1:null,
        Option_2:null,
        Option_3:null,
        Option_4:null,        
        Correct_Answer:null,
        Selected: null,
      }
  
    constructor(private quizservice:QuizService,private route: Router) {
      this.QNo=0
      this.Marks=0
     }
  //   saveUser(user:Iquestions){​​​​    
  //     console.log("hi")
  //     this.quizservice(this.Questions).subscribe(()=>
  //     {​​​​  
  //       // console.log(this.user)    
  //       alert("Registered");     
  //      this.route.navigate(['/']);   
  //    }​​​​,error=>{
  //     alert(error.Message);
  //    }); 
  //  }​​​​
  ngOnInit(): void {
    console.log("hi");
    this.quizservice.getcourses().subscribe((data: Icourse[])=>{
      console.log(data);
        this.courses = data;
    })  
  
  }
  startTest()
    {
 
  this.quizservice.getQuestions(this.Courseid,this.Level_id)
      .subscribe((data: Iquestions[])=>{
              this.Questions = data;
              console.log(this.Questions)
}) 
 console.log(this.Courseid)
}

Next()
{

  this.QNo=this.QNo+1;
}
Previous()
{

  this.QNo=this.QNo-1;
}
}
  
   

