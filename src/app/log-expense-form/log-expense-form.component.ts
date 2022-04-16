import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-log-expense-form',
  templateUrl: './log-expense-form.component.html',
  styleUrls: ['./log-expense-form.component.css']
})
export class LogExpenseFormComponent implements OnInit {

  @Input() available:number
  
  @Output() new_available:EventEmitter<number> =  new EventEmitter();
  amount_spent!: number 


  OnSubmit(amount_spent:number){
    console.log(this.amount_spent);
    this.amount_spent=this.available-this.amount_spent;
    this.new_available.emit(this.amount_spent)
    console.log("Log Expense was clicked")
    console.log(this.amount_spent); 
  }

  constructor() {

    this.available=100;
   this.amount_spent!;

   }

  ngOnInit(): void {
  }

}
