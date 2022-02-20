import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PassagerService {
  readonly url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  getPassagerReservations(){
    return this.http.get<any[]>(this.url+"Passagers/"+sessionStorage.getItem('user')+"/Reservations");
  }
}
