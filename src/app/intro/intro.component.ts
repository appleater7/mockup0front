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
  columnsValue:string[] = [''];
  columnsCnt:number[] = [0];
  cnt:number=0;
  
  constructor() {}

  ngOnInit() {
  }
  addColumns(){ 
    this.cnt= this.cnt  
    this.columnsCnt.push(this.cnt);
    this.columnsValue.push(this.columnsValue[this.cnt]);
  }
  send() {
    alert(this.tableName);
    for(var i=0;i<this.columnsValue.length;i++){
      console.log(this.columnsValue[i]);
    }
  }

}
