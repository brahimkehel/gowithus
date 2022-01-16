import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../models/annonce";

@Injectable({
  providedIn: 'root'
})
export class ConducteurService {
  readonly url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post(this.url+"login",{
      username,
      password
    });
  }
}
