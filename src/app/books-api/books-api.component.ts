import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { tBook } from '../models/books';

@Component({
  selector: 'app-books-api',
  templateUrl: './books-api.component.html',
  styleUrls: ['./books-api.component.css']
})
export class BooksApiComponent implements OnInit {
  empty     : boolean      = false;
  visible   : boolean      = false;
  isbn      : string       = '';
  isbnValid : boolean      = true;

  book      : tBook   = {
    title       : "",
    imageLinks  : {'thumbnail' : ''},
    description : "",
    pageCount   : -1
  }; 

  constructor(private _booksService : BooksService) { }

  ngOnInit(): void {
  }

  async searchBook() {
    //reset 
    this.visible=false;
    this.isbnValid = true;
    //if isbn is empty => show the message and stop
    if(!this.isbn)
    {
      this.empty = true;
      return
    }
    //else remove the message, download data and show the book !
    this.empty = false;
    this.visible = true;
    
    this.book = {...await this._booksService.get(this.isbn).then((e)=> e.totalItems != 0 ? e.items[0].volumeInfo : 0).catch(()=>0)}
    //if book not found then isbn not valid
    if(Object.keys(this.book).length === 0)
    {
      this.isbnValid = false;
      this.visible = false;
    }
    
  }

}
