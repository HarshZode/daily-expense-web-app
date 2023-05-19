import { Budget } from './../budget';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-daily-expense-app',
  templateUrl: './daily-expense-app.component.html',
  styleUrls: ['./daily-expense-app.component.css']
})
export class DailyExpenseAppComponent implements OnInit {

  btn_newbudget:boolean = false;
  btn_addmoney:boolean=false;
  btn_logexpense:boolean=false;

  on_logexpense(){
    if (this.btn_logexpense==false) {
      this.btn_newbudget=false;
      this.btn_addmoney=false;
      this.btn_logexpense=true;
    } else {
      this.btn_logexpense=false;
    }
  }

  on_addmoney(){
    if (this.btn_addmoney==false) {
      this.btn_addmoney=true;
      this.btn_newbudget=false;
      this.btn_logexpense=false;
    } else {
      this.btn_addmoney=false;
    }
  }

  on_newbudget(){
    if (this.btn_newbudget==false) {
      this.btn_newbudget=true;
      this.btn_addmoney=false;
      this.btn_logexpense=false;
    } else {
      this.btn_newbudget=false;
    }
  }

  BudgetObject = new Budget();
  budget:number=this.BudgetObject.budget;
  available:number=this.BudgetObject.available;
  budget_info: any;

  updateBudget(new_number: number){
    this.budget=new_number;
    this.BudgetObject.budget=this.budget;
    this.BudgetObject.available=this.budget;
    this.available=this.BudgetObject.available;
    localStorage.setItem("budget", JSON.stringify(this.BudgetObject));
    console.log(this.budget);
    this.btn_newbudget=false;
  }

  updateavailable(new_available :number){
    this.available=new_available;
    this.BudgetObject.available=this.available;
    localStorage.setItem("budget", JSON.stringify(this.BudgetObject));
    console.log(this.available);
    this.btn_logexpense=false;
  }
  localItem:any;
  constructor() {
    this.localItem = localStorage.getItem("budget")

    if (this.localItem == null){
      this.BudgetObject = new Budget();
      this.BudgetObject.budget = 1000;
      this.BudgetObject.available = 1000;
      this.budget = this.BudgetObject.budget
      this.available = this.BudgetObject.available
    }
    else{

      this.BudgetObject = JSON.parse(this.localItem)
      this.budget = this.BudgetObject.budget
      this.available = this.BudgetObject.available
    }
    
    
   }

  ngOnInit(): void {
  }

}
