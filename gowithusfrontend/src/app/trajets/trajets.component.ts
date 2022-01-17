import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../services/annonce.service";
import {ActivatedRoute} from "@angular/router";
import {Annonce} from "../models/annonce";

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {
  private argsObj: any;
  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe(params => {
          this.argsObj = {...params.keys, ...params};
          console.log(this.argsObj);
        }
      );
    this.getAnnonceByArgs();
  }

  getAnnonceByArgs() {
    //const req = this.annonceService.getAnnonceByArgs(this.argsObj["params"]["depart"], this.argsObj["params"]["arrive"]);
    const $req = this.annonceService.getAnnonceByArgs("a", "b");
    $req.subscribe({
      next: (res) => {
        res.forEach(a=>{
          this.annonces.push(new Annonce(a.id,a.depart,a.arrive,a.prix,a.date,a.heureDepart,a.conducteur))
        })
        console.log(this.annonces)
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
