import { Component, OnInit } from '@angular/core';
import {ConducteurService} from "../../services/conducteur.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private conducteurService:ConducteurService) { }

  ngOnInit(): void {
  }
  login(username:string,password:string){
    this.conducteurService.login(username,password).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      },
      ()=>{
        console.log("completed");
      },
    )
  }
}
