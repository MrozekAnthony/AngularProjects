import { Injectable } from '@angular/core';

const URL : string = "https://www.googleapis.com/books/v1/volumes?q=isbn:__ISBN__&key=__KEY__";
const API_KEY : string = "AIzaSyDITbch64t3KJX0npwPYFI-eFYmN8EmSPc";

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  constructor() { }

  async get(isbn : string) {
    const urlTmp = URL.replace('__ISBN__', isbn)
                      .replace('__KEY__', API_KEY);
    const resp = await fetch(urlTmp)
    const data = await resp.json();
    return data;
  }
}
