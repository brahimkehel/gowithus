import {EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Annonce} from "../models/annonce";
import {Observable, Subject,of, BehaviorSubject} from "rxjs";
import {Conducteur} from "../models/conducteur";
import {Passager} from "../models/passager";


@Injectable()
export class UtilisateurService {
  readonly url:string="http://localhost:8080/";
  username: BehaviorSubject<string> = new BehaviorSubject<string>("Connectez-vous");


  constructor(private http:HttpClient) {}

  login(username:string,password:string){
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(this.url+"login",body.toString(),{
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  registerConducteur(conducteur:Conducteur){
    return this.http.post(this.url+"Utilisateurs/saveConducteur",conducteur);
  }
  registerPassager(passager:Passager){
    return this.http.post(this.url+"Utilisateurs/savePassager",passager);
  }

}
