import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import  'rxjs/internal/operators/map';
import { map } from 'rxjs/internal/operators/map';

export type tBook = {
  title       : "",
  picture     : "",
  description : "",
  pageCount   : -1
}; 

@Component({
  selector: 'app-books-api',
  templateUrl: './books-api.component.html',
  styleUrls: ['./books-api.component.css']
})
export class BooksApiComponent implements OnInit {
  empty   : boolean = false;
  visible : boolean = false;
  isbn    : string  = '';
  book    : any[]   = [];

  // book    : tBook   = {
  //   title       : "",
  //   picture     : "",
  //   description : "",
  //   pageCount   : -1
  // }; 

  constructor(private _booksService : BooksService) { }

  ngOnInit(): void {
  }

  searchBook() {
    //reset 
    this.visible=false;

    //if isbn is empty => show the message and stop
    if(!this.isbn)
    {
      this.empty = true;
      return
    }
    //else remove the message, download data and show the book !
    this.empty = false;
    this.visible = true;
    console.log(this.isbn);

    //this.book = this._booksService.get(this.isbn)

    console.log("test", this._booksService.get(this.isbn));
  }

}
