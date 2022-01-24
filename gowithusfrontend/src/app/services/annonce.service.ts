import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../models/annonce";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  readonly url: string = "http://localhost:8080/";

  public messageNotification = new EventEmitter<string>();

  constructor(private http: HttpClient) {
  }

  public getAnnonceByArgs(depart: string, arrive: string,date:Date): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url + "Annonces?depart=" + depart + "&arrive=" + arrive+ "&date=" + date);
  }

  public getAnnonceByConducteurId(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url + "Conducteurs/" + sessionStorage.getItem("user") + "/Annonces");
  }

  public addAnnonce(annonceForm:any){
    return this.http.post("http://localhost:8080/Conducteurs/"+sessionStorage.getItem("user")+"/saveAnnonce",{
      "depart":annonceForm.value.depart,
      "arrive":annonceForm.value.arrive,
      "prix":annonceForm.value.prix,
      "date":annonceForm.value.date,
      "heureDepart":annonceForm.value.heureDepart
    });
  }
}
