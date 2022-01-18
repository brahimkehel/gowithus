import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  readonly url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { }

  public addReservation(){
    return this.http.post(this.url+"Passagers/7/6",{});
  }
}
