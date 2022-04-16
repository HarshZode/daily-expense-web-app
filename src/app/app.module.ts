import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { TodoWebAppComponent } from './todo-web-app/todo-web-app.component';
import { DailyExpenseAppComponent } from './daily-expense-app/daily-expense-app.component';
import { AddMoneyComponent } from './add-money/add-money.component';
import { LogExpenseComponent } from './log-expense/log-expense.component';
import { AddMoneyFormComponent } from './add-money-form/add-money-form.component';
import { LogExpenseFormComponent } from './log-expense-form/log-expense-form.component';
import { FormsModule }   from '@angular/forms';
import { TodoListContainerComponent } from './todos/todo-list-container/todo-list-container.component';
import { AddTodoFormComponent } from './todos/add-todo-form/add-todo-form.component';
import { TodoTaskContainerComponent } from './todos/todo-task-container/todo-task-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    TodoWebAppComponent,
    DailyExpenseAppComponent,
    AddMoneyComponent,
    LogExpenseComponent,
    AddMoneyFormComponent,
    LogExpenseFormComponent,
    TodoListContainerComponent,
    AddTodoFormComponent,
    TodoTaskContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
