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
    const $req = this.annonceService.addAnnonce(annonceForm);
    $req.subscribe({
      next: (res) => {
        console.log("addded")
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
