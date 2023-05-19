import { Budget } from './../budget';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Budget } from '../budget';
import { FormStyle } from '@angular/common';

@Component({
  selector: 'app-add-money-form',
  templateUrl: './add-money-form.component.html',
  styleUrls: ['./add-money-form.component.css']
})
export class AddMoneyFormComponent implements OnInit {
  
  @Input() budget:number 

  @Output() New_budget: EventEmitter<number> = new EventEmitter();
  

  new_amount!: number;
  
  display(){
    console.log(this.budget);
  }


  budgetSubmit(new_amount:number){
    this.budget = new_amount
    this.New_budget.emit(this.budget);
    console.log(this.budget);
  }

  constructor() { 

    this.budget = 100;
   

  }

  ngOnInit(): void {
  }

}
