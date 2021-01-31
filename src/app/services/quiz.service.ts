import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import {Observable,of} from 'rxjs';
import {Iquestions} from '../classes/iquestions';
import { Icourse } from '../classes/icourse';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiServer = "http://localhost:49965/api";
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(private http:HttpClient) { }
 
  // getAll(): Observable<Iquestions[]> {
  //   return this.httpClient.get<Iquestions[]>(this.apiServer + '/products/')
    
  // }
  // getquestions(user:Iquestions):Observable<Iquestions[]>{​​​​  
  //   return this.http.get<Iquestions[]>(this.apiServer + "questions/GetAll/",this.httpOptions);
  // }​​​​
  getById(Course_id,Level_id): Observable<Iquestions> {
    return this.http.get<Iquestions>(this.apiServer + 'questions/GetByID/' + this.httpOptions);
  
  } 
  getcourses():Observable<Icourse[]>{
    return this.http.get<Icourse[]>(this.apiServer + "/Course/",this.httpOptions);
  }​​​​
  getQuestions(Course_id,Level_id): Observable<Iquestions[]> {
    return this.http.get<Iquestions[]>
    (this.apiServer + '/questions'+ Course_id +Level_id )
   }
  }
  

