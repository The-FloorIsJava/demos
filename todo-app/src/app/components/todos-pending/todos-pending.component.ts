import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos-pending',
  templateUrl: './todos-pending.component.html',
  styleUrls: ['./todos-pending.component.css']
})
export class TodosPendingComponent implements OnInit {


  todo1 : Todo = {id: 1, title: "Make a cup of java", isCompleted: false}
  todo3 : Todo = {id: 3, title: "Buy some Mtn Dew & Doritos", isCompleted: false}
  todo4 : Todo = {id: 4, title: "cry softly as my life withers away", isCompleted: false}

  todos : Todo[] = [this.todo1, this.todo3, this.todo4]

  constructor() { }

  ngOnInit(): void {
  }

}
