import { Component, OnInit } from '@angular/core';

export type Link = {
  title: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  linkList : Link[] = [];

  constructor() { }

  ngOnInit(): void {
    this.linkList = [
      {
        title: 'Accueil', url: '/'
      },
      {
        title: 'BooksApi', url: '/BooksApi'
      }
    ]
  }

}
