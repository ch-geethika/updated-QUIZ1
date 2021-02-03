import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CoursesComponent } from './courses/courses.component';
import { StarttestComponent } from './starttest/starttest.component';

import { CoursesInfoComponent } from './courses-info/courses-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CoursesComponent,
    StarttestComponent,
  
    CoursesInfoComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
