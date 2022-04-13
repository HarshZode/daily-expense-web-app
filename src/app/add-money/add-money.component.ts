import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  btn_add: boolean = false;
  btn_log: boolean = false;

  OnAddClick(){

    console.log("btn was clicked")

    if (this.btn_add == true) {
      this.btn_add=false;
      console.log(this.btn_add)
      
    } else {
      this.btn_add= true;
      this.btn_log=false;
      console.log(this.btn_add);
    }
  }

  OnLogClick(){
    console.log("btn was clicked")

    if (this.btn_log == true) {
      this.btn_log=false;
      console.log(this.btn_log)
      
    } else {
      this.btn_log= true;
      this.btn_add=false;
      console.log(this.btn_log);
    }
  }
  

  constructor() {
    btn_add:  false;
    btn_log: false;
   }

  ngOnInit(): void {
  }

}
