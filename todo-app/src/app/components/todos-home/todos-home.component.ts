import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: "app-todos-home",
    templateUrl: "./todos-home.component.html",
    styleUrls: ["./todos-home.component.css"]
})
export class TodosHomeComponent implements OnInit{

    todos : Todo[] = []

    visibility : boolean = false;

    image : string = 'https://miro.medium.com/max/1400/0*bP0GbIkuUFhxhzoo'

    constructor(private todoService:TodoService){}

    ngOnInit(): void {
        this.todos = this.todoService.todos
    }

    checkVisibility(){
        this.visibility = !this.visibility;
    }

}