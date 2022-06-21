import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo-item';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent implements OnInit {
  
  todos: Todo[];

  index !:number;
  x !: number;
  
  deletetodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.x = this.todos.length -1 ;
  }

  AddTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.x = this.todos.length -1 ;
  }

  toggleTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos[index].active =! this.todos[index].active
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  localItem:any;

  constructor() {

    this.localItem = localStorage.getItem("todos")

    if (this.localItem == null){
      this.todos = [
        
      ];
    }
    else(
      this.todos = JSON.parse(this.localItem)
    )
    this.x = this.todos.length- 1;

  }

  ngOnInit(): void {
  }


}
