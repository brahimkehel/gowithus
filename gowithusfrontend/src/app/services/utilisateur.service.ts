import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, Subject, of, BehaviorSubject} from "rxjs";
import {Conducteur} from "../models/conducteur";
import {Passager} from "../models/passager";


@Injectable()
export class UtilisateurService {
  readonly url: string = "http://localhost:8080/";
  username: BehaviorSubject<string> = new BehaviorSubject<string>("Connectez-vous");
  role: BehaviorSubject<string> = new BehaviorSubject<string>("");


  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.post(this.url + "login", body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }

  registerConducteur(conducteur: Conducteur,files:any) {
    let form=new FormData();
    let u={
      id:conducteur.id,
      nom:conducteur.nom,
      prenom:conducteur.prenom,
      tel:conducteur.tel,
      cin:conducteur.cin,
      email:conducteur.email,
      marque:conducteur.marque,
      nb_places:conducteur.nb_places,
      username:conducteur.username,
      password:conducteur.password
    }
    form.append("conducteur",JSON.stringify(u));
    form.append("photoProfil",files[0][0]);
    form.append("photoCin",files[1][0]);
    form.append("photoCarteGrise",files[2][0]);
    return this.http.post(this.url + "Utilisateurs/saveConducteur", form);
  }

  registerPassager(passager:any,files:any){
    let form=new FormData();
    form.append("passager",JSON.stringify(passager));
    form.append("photoProfil",files[0][0]);
    form.append("photoCin",files[1][0]);
    return this.http.post(this.url+"Utilisateurs/savePassager",form);
  }

  getAllConducteursApprouved() {
    return this.http.get<Conducteur[]>(this.url + "Conducteurs/approuved");
  }

  getAllConducteursNonApprouved() {
    return this.http.get<Conducteur[]>(this.url + "Conducteurs/nonapprouved");
  }

  getAllPassager() {
    return this.http.get<Passager[]>(this.url + "Passagers/");
  }

  getAllApprouved() {
    return this.http.get(this.url + "Utilisateurs/approuved");
  }

  sendMail(emails: string[], objet: string, content: string) {
    console.log(emails)
    return this.http.post(this.url + "Utilisateurs/sendmail", {
      emails: emails,
      objet: objet,
      content: content
    });
  }

  setApprouvedConducteur(id: number) {
    return this.http.post(this.url + "Conducteurs/" + id, {});
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + "Utilisateurs/" + id);
  }
}
