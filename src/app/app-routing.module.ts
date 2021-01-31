import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from '../app/test/test.component';
import {StarttestComponent} from '../app/starttest/starttest.component';
const routes: Routes = [
  // {path:'/test', component:TestComponent},
  // {path:'/startexam/:id/:UserId',component:StarttestComponent},
  // {path: '',component:StarttestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
