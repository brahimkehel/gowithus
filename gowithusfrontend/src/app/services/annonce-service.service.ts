import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {Annonce} from "../models/annonce";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {
  readonly url:string="http://localhost:8080/";

  constructor(private http:HttpClient) { }

  public getAnnonceByArgs(depart:string,arrive:string){
    return this.http.get<Annonce>(this.url+"Annonces?depart="+depart+"&arrive="+arrive);
  }

  public getAnnonceByConducteurId(id:number)
  {
    return this.http.get<Annonce>(this.url+"Conducteurs/"+id+"/Annonces");
  }
}
