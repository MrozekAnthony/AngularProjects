import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

export type tBook = {
  title? : string;
  picture : string;
  description? : string;
  pageCount? : number;
}

const URL : string = "https://www.googleapis.com/books/v1/volumes?q=isbn:__ISBN__&key=__KEY__";
const API_KEY : string = "AIzaSyDITbch64t3KJX0npwPYFI-eFYmN8EmSPc";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  constructor(private _http : HttpClient) { }

  get(isbn : string) {
    const urlTmp = URL.replace('__ISBN__', isbn)
                      .replace('__KEY__', API_KEY);
    console.log("Service : ", urlTmp);
    
    const ret = this._http
    .get(urlTmp)
    .subscribe((res) => {
      alert(JSON.stringify(res));
      JSON.stringify(res);
    })

    return ret
  }
}
