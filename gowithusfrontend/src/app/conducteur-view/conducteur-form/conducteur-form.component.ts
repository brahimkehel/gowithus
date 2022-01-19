import { Component, OnInit } from '@angular/core';
import {Annonce} from "../../models/annonce";
import {AnnonceService} from "../../services/annonce.service";

@Component({
  selector: 'app-conducteur-form',
  templateUrl: './conducteur-form.component.html',
  styleUrls: ['./conducteur-form.component.css']
})
export class ConducteurFormComponent implements OnInit {

  constructor(private annonceService:AnnonceService) { }

  ngOnInit(): void {
  }

  addConducteur(annonceForm:any) {
    console.log(annonceForm.value.depart)
    let a=new Annonce();
    a.depart=annonceForm.value.depart;
    a.arrive=annonceForm.value.arrive;
    a.prix=annonceForm.value.prix;
    a.date=annonceForm.value.date;
    a.heureDepart=annonceForm.value.heureDepart;
    const $req = this.annonceService.addAnnonce(annonceForm);
    $req.subscribe({
      next: (res) => {
        console.log("addded")
        this.annonceService.messageNotification.emit("update")
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("complete")
      }
    })
  }
}
