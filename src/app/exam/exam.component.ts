import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {QuizService} from '../services/quiz.service';
import {Iquestions} from '../classes/iquestions';
import { Icourse } from '../classes/icourse';
import {ICheck} from '../icheck';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  courseid: number;
  Level_id:number;
  Questions : Iquestions[] = [];

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

  Count:number=1;
  number:number;
  UserId:number;

  
  constructor(private quizservice:QuizService,private route: Router,private router:ActivatedRoute) { }
 
  Level()
  {
    this.quizservice.getQuestions(this.courseid,this.Level_id).subscribe((data)=>{
      this.Questions=data;
      console.log("geeth");
      //this.LoadQuiz();
      console.log(data);
      for( var l of this.Questions)
      {
        if(this.Count<=10)
        {
this.Questions.push(l);
this.Count++;
      }
    }
     
    });
    
  }
  
  onSelect(Ques:Iquestions,option:number)
  {
  if(Ques.Correct_Answer == option)
  {
 Ques.Selected=true;
  }
  else{
    Ques.Selected=false;
  }
  console.log(Ques.Level_id);
}
  
  onSubmit(){
   //let List=[];
    for(var l of this.Questions)
    {
    if(l.Selected==true)
    {
      this.Count=this.Count+this.number;
    }
    console.log("madhu");
    console.log(l);
   
  }
  alert(this.Count);
  // this.route.navigate();
  }

//   Info(id:number,level:number,userid:number)
//   {
//    this.courseid=id;
//    this.Level_id=level;
//    this.UserId=userid;
//    if(level==1)
//    {
//      this.number=1;
//    }
//    else if(level==2)
// {
// this.number=1.5;
// }
// else if(level==3)
// {
//   this.number=2;
// }
    
// }



  ngOnInit(): void {
      const id= +this.router.snapshot.paramMap.get('id');
    
      const level= +this.router.snapshot.paramMap.get('level');
      const userid= +this.router.snapshot.paramMap.get('UserId');
      // this.Info(id,level,userid);
  }

}
