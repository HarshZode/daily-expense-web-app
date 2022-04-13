import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-expense-form',
  templateUrl: './log-expense-form.component.html',
  styleUrls: ['./log-expense-form.component.css']
})
export class LogExpenseFormComponent implements OnInit {

  spent_money: number =0;

  OnSubmit(){
    this.spent_money=0;
    console.log("Log Expense was clicked")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
