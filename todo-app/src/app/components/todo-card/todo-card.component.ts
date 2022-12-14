
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input()
  todo : Todo = {id:0,title:'not an actual todo', isCompleted:true}

  @Output()
  markedTodoEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  markCompletedID(id: number){
    this.markedTodoEvent.emit(id)
  }

}
