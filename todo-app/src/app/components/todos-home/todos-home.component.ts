import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";

@Component({
    selector: "app-todos-home",
    templateUrl: "./todos-home.component.html",
    styleUrls: ["./todos-home.component.css"]
})
export class TodosHomeComponent implements OnInit{

    // Define data using the interface

    todo1 : Todo = {id: 1, title: "Make a cup of java", isCompleted: false}
    todo2 : Todo = {id: 2, title: "Grind on wow", isCompleted: true}
    todo3 : Todo = {id: 3, title: "Buy some Mtn Dew & Doritos", isCompleted: false}
    todo4 : Todo = {id: 4, title: "cry softly as my life withers away", isCompleted: false}

    todos : Todo[] = [this.todo1, this.todo2, this.todo3, this.todo4]

    visibility : boolean = false;

    image : string = 'https://miro.medium.com/max/1400/0*bP0GbIkuUFhxhzoo'

    constructor(){}

    ngOnInit(): void {
        
    }

    checkVisibility(){
        this.visibility = !this.visibility;
        alert(`The visibility is now ${this.visibility}`)
    }

}