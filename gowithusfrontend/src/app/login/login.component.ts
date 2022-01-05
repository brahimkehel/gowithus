import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isRegister:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onRegisterHandler(event:Event){
    event.preventDefault();
    if(this.isRegister)this.isRegister=false;
    else this.isRegister=true;
  }
}
