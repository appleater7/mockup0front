import { Component, OnInit } from '@angular/core';
import { AjaxService } from './ajax.service';

@Component({
  selector: 'app-upbit',
  templateUrl: './upbit.component.html',
  styleUrls: ['./upbit.component.css']
})
export class UpbitComponent implements OnInit {

  constructor(private _ajax:AjaxService) { }

  ngOnInit() {
  }
  getMarketAll(){
    this._ajax.getMarketAll();
  }

  getToken(){
    const jwt = require("jsonwebtoken");
    const uuidv4 = require("uuid/v4");
    const payload = {
      access_key: "wxouyKEdd5vcEMxNT98vGxO7z4bh5rpI1MwTNBJ3",
      nonce: uuidv4(),
    };
    const jwtToken = jwt.sign(payload, "zpNzay9OJE7YZXFABdxxXvzVw50x7GTrOSW08n7p");
    const authorizationToken = `Bearer ${jwtToken}`;
    return authorizationToken;
  }
}
