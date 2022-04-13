import { AddMoneyComponent } from './add-money/add-money.component';
import { DailyExpenseAppComponent } from './daily-expense-app/daily-expense-app.component';
import { TodoWebAppComponent } from './todo-web-app/todo-web-app.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {path:'home',component: HomeComponent},
  {path:'todo', component: TodoWebAppComponent},
  {path:'daily-expense-app', component: DailyExpenseAppComponent},
  {path:'addmoney', component: AddMoneyComponent, outlet:'addmoney'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
