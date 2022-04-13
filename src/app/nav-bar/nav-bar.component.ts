import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  daily_expense_app :boolean = false;
  todo_web_app :boolean = false;

  ondaily(){
    console.log("btn was clicked")

    if (this.daily_expense_app == true) {
      this.daily_expense_app=false;
      console.log(this.daily_expense_app)
      
    } else {
      this.daily_expense_app= true;
      this.daily_expense_app=false;
      console.log(this.daily_expense_app);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
