import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Annonce} from "../models/annonce";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {
  readonly url: string = "http://localhost:8080/";

  constructor(private http: HttpClient) {
  }

  public getAnnonceByArgs(depart: string, arrive: string): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url + "Annonces?depart=" + depart + "&arrive=" + arrive);
  }

  public getAnnonceByConducteurId(id: number): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url + "Conducteurs/" + id + "/Annonces");
  }

  public addAnnonce(annonceForm:any){
    return this.http.post("http://localhost:8080/Conducteurs/4/saveAnnonce",{
      "depart":annonceForm.value.depart,
      "arrive":annonceForm.value.arrive,
      "prix":annonceForm.value.prix,
      "date":annonceForm.value.date,
      "heureDepart":annonceForm.value.heureDepart
    });
  }
}
