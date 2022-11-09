import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_ADDRESS : string = "http://www.tibi.be/service/waste/autocompleteZone?query=__address__";


@Injectable({
  providedIn: 'root'
})
export class TibiService {
  options = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Content-Type' : 'application/json',
      'withCredentials' : 'false',
      'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:106.0) Gecko/20100101 Firefox/106.0',
      'Origin' : 'tibi.be',
      'Host' : "https://www.tibi.be/service/waste/eventsCalendar?year=2022&month=11&zone=20"
      //'Access-Control-Allow-Headers': "Origin, X-Requested-With, Content-Type, Accept"
  })
  constructor(private _httpCli :HttpClient) { }

  get(address : string) : Observable<any> {
    const urlTmp = URL_ADDRESS.replace('__address__', address)
    let data : string;
    return this._httpCli.get<any>(urlTmp, {headers : this.options})
    //const resp = await fetch(urlTmp)
    //const data = await resp.json();
    //return data;
  }
}


