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
  // Courseid: number;
  Level_id:number;
  r1: string;
  time: number = 0;
display ;
interval;

timeLeft: number = 3600;
TestStatus:boolean = false;
Message:string = "";
ResultStatus:boolean=false;



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
        Correct_answer:null,
     
      }

    constructor(private quizservice:QuizService,private route: Router,private router:ActivatedRoute) {
      this.QNo=0
      this.Marks=0
      this.Level_id=1
     }
 
  ngOnInit(): void {
    // console.log("hi");
    // this.quizservice.getcourses(this.router.snapshot.params['Course_id']).subscribe((data: Icourse[])=>{
    //   console.log(data);
    //     this.courses = data;
        
   // })  
  this.startTest()
  console.log(this.router.snapshot.params['Course_id'])
  }
  startTest()
    {
      this.TestStatus=true;
      this.Marks=0;
      this.QNo=0;
      // this.quizservice.getcourses(this.router.snapshot.params['Course_id']).subscribe((data)=>
      // console.log(data));
      
  this.quizservice.getQuestions(this.router.snapshot.params['Course_id'],this.Level_id)
      .subscribe((data: Iquestions[])=>{
              this.Questions = data;
              console.log(this.Questions)
}) 
  this.startTimer1()
}
isAnswered()
{
  console.log(this.Questions[this.QNo].Correct_answer)
  console.log(this.r1)
  if(this.Questions[this.QNo].Correct_answer.toString() === this.r1)
  { 
    // console.log("hey true")
  return true
  }
  
  else
  // console.log("hey false")
  return false
}

Next()
{
  console.log(this.isAnswered())
  // console.log(this.r1)
  if(this.isAnswered())
  {
    
    this.Marks= this.Marks +1;
    
  }
  this.QNo=this.QNo+1;
  this.Reset()
}

submitTest()
{
// this.testStatus=false;
      if(this.isAnswered())
      {
          this.Marks=this.Marks+1;
        
      }
// this.prompt()
this.StopTimer()
this.CalculateMarks()
this.TestStatus = false;
}
// prompt()
// {
//   if(confirm("Are you sure to submit the test?"))
//    {
//     console.log("Submitted the test");
//   }
//   else()
//   { 
    
//   }
// }


Previous()
{

  this.QNo=this.QNo-1;
}

startTimer1() {
  
  console.log("=====>");
  this.interval = setInterval(() => {
    if(this.time ===30)
    {
      
      console.log(this.time)
       this.submitTest()
    }
    if (this.time === 0) {
      
      this.time++;
    } else {
      this.time++;
    }
    this.display=this.transform( this.time)
  }, 1000);

}

transform(value: number): string {
     const minutes: number = Math.floor(value / 60);
     return minutes + ':' + (value - minutes * 60);
}

StopTimer() {
  
  clearInterval(this.interval);
  this.time=0;
  this.display="";
  
}
Reset()
  {
    this.r1=""
  }

  CalculateMarks()
    {
      if(this.Marks>=5)
      {
        this.ResultStatus=true;
        this.TestStatus =true;
        this.Message="Congratulations! You have passed level 1. Click on next to continue";
        // this.route.navigateByUrl('/test/level_id');
      }
      else{
        this.Message="OOPS!!! You did not clear the Level 1 exam! Better luck next time!";
        this.ResultStatus=false;
      }
    }
  
    Continue()
    {
      if(this.Level_id<=3)
      {
      this.Level_id=this.Level_id+1;
      this.startTest()
      }
     
    }

    

}



  
   

