import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from '../app/test/test.component';
import {StarttestComponent} from '../app/starttest/starttest.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesInfoComponent } from './courses-info/courses-info.component';
const routes: Routes = [
  {path:'test', component:TestComponent},
  {path:'startexam/:Course_id',component:StarttestComponent},
  {path:'courses/:Course_id',component:CoursesComponent},
  {path:'coursesinfo',component:CoursesInfoComponent},
  {path: 'test/:Course_id', component:TestComponent } ,

  {path: '',component:CoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
