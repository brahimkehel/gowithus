import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  readonly url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public addReservation(id:number){
    return this.http.post(this.url+"Passagers/"+sessionStorage.getItem("user")+"/"+id,{});
  }
}
