import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route} from '@angular/router';
import {TestComponent} from '../test/test.component';

@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {
  Idd:number=null;
  UserId:number;
  constructor(private router:ActivatedRoute) { }

  Info(id:number,userid:number){
    this.Idd=id;
    this.UserId=userid;
  }

  ngOnInit(): void {
    const id= +this.router.snapshot.paramMap.get('id');
    const userid= +this.router.snapshot.paramMap.get('UserId');
    this.Info(id,userid);
  }

}
