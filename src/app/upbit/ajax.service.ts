import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  constructor(private _http:HttpClient) { }
  getMarketAll(){
    var request = require("request");
    var options = { method: 'GET', url: 'https://api.upbit.com/v1/market/all'};
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });
  }
}
