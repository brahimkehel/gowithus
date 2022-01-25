import {EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Annonce} from "../models/annonce";
import {Observable, Subject,of, BehaviorSubject} from "rxjs";
import {Conducteur} from "../models/conducteur";
import {Passager} from "../models/passager";
import {stringify} from "@angular/compiler/src/util";


@Injectable()
export class UtilisateurService {
  readonly url:string="http://localhost:8080/";
  username: BehaviorSubject<string> = new BehaviorSubject<string>("Connectez-vous");
  role: BehaviorSubject<string> = new BehaviorSubject<string>("");


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
    return this.http.post(this.url+"Utilisateurs/saveConducteur",{
      id:conducteur.id,
      nom:conducteur.nom,
      prenom:conducteur.prenom,
      nb_places:conducteur.nb_places,
      cin:conducteur.cin,
      username:conducteur.username,
      email:conducteur.email,
      tel:conducteur.tel,
      marque:conducteur.marque,
      password:conducteur.password
    },{responseType:"text"});
  }
  registerPassager(passager:Passager){
    return this.http.post(this.url+"Utilisateurs/savePassager",passager);
  }

  getAllConducteursApprouved(){
    return this.http.get<Conducteur[]>(this.url+"Conducteurs/approuved");
  }

  getAllConducteursNonApprouved(){
    return this.http.get<Conducteur[]>(this.url+"Conducteurs/nonapprouved");
  }

  getAllPassager(){
    return this.http.get<Passager[]>(this.url+"Passagers/");
  }
  getAllApprouved(){
    return this.http.get(this.url+"/Utilisateurs/approuved");
  }
  sendMail(emails:string[],objet:string,content:string){
    console.log(emails)
    return this.http.post(this.url+"Utilisateurs/sendmail",{
      emails:emails,
      objet:objet,
      content:content
    });
  }
}
