import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input()
  todo : Todo = {id:0,title:'not an actual todo', isCompleted:true}

  constructor() { }

  ngOnInit(): void {
  }


}
