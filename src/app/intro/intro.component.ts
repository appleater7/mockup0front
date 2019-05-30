import { Component, OnInit } from '@angular/core';
import { parse } from 'url';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  tableName:string = '';
  resultStr:string = '';
  columns:number[] = [0,1,3,4,5];
  cnt:number=0;
  constructor() { }

  ngOnInit() {
  }
  addColumns(){
    this.cnt++;
    this.columns.push(this.columns.length);
  }
  send() {
    alert(this.tableName);
    for(var i=this.columns.length; i>0;i--){
      alert(this.columns[this.columns.pop()]);
    }
  }

}
