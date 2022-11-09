import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';
import { priority } from '../enum/priority';
import { tTodo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  error : boolean = false;

  todos : tTodo[] = [
    {
      id : nanoid(),
      title : "Faire la vaisselle", 
      description:"La dernière fois les assiettes étaient encore sales",
      priority : priority.Medium,
      deleted : false
    }
  ]

  newTodo : tTodo =     {
    id : "",
    title : "", 
    description: "",
    priority : priority.Medium,
    deleted : false
  }

  constructor() { }

  ngOnInit(): void {
  }

  add() : void {
    if(!this.newTodo.title || !this.newTodo.description)
    {
      this.error = true;
      return
    }
    this.error = false;
    this.newTodo.id = nanoid();
    this.newTodo.deleted = false;
    this.todos.push(this.newTodo);
    console.log("click");
    this.newTodo = {
      id : '',
      title : '',
      description : '',
      deleted : false
    }
  }

  delete(id : string) : void {
    const td = this.todos.find(elem => elem.id === id)
    if(!td)
      return
    td.deleted = true;
  }

}
