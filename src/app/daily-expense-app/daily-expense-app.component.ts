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

  budget:number=1000;

  available:number=1000;
  budget_info: any;

  updateBudget(new_number: number){
    this.budget=new_number;
    this.available=this.budget;
    console.log(this.budget);
    this.btn_newbudget=false;
  }

  updateavailable(new_available :number){
    this.available=new_available;
    console.log(this.available);
    this.btn_logexpense=false;
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
