import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos-pending',
  templateUrl: './todos-pending.component.html',
  styleUrls: ['./todos-pending.component.css']
})
export class TodosPendingComponent implements OnInit {

  todos : Todo[] = []

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.todos
  }

}
