import { Component, Input, OnInit } from '@angular/core';
// import { Budget } from '../budget';
import { FormStyle } from '@angular/common';

@Component({
  selector: 'app-add-money-form',
  templateUrl: './add-money-form.component.html',
  styleUrls: ['./add-money-form.component.css']
})
export class AddMoneyFormComponent implements OnInit {
  added_money: number =0;
 
   
  OnSubmit(){
    
    this.added_money=this.added_money
    console.log("I was clicked");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
