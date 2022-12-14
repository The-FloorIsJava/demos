import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // Define data using the interface

  todo1 : Todo = {id: 1, title: "Make a cup of java", isCompleted: false}
  todo2 : Todo = {id: 2, title: "Grind on wow", isCompleted: true}
  todo3 : Todo = {id: 3, title: "Buy some Mtn Dew & Doritos", isCompleted: false}
  todo4 : Todo = {id: 4, title: "cry softly as my life withers away", isCompleted: false}

  todos : Todo[] = [this.todo1, this.todo2, this.todo3, this.todo4]

  constructor() { }
}
