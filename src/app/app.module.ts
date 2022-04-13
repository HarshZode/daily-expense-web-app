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
    LogExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
