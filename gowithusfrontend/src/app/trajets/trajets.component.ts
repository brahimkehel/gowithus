import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../services/annonce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Annonce} from "../models/annonce";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {
  argsObj: any;
  annonces: Annonce[] = [];
  type:string="search";

  filtredAnnonces: Annonce[] = [];
  filterArgs = new FormControl();

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe(params => {
          this.argsObj = {...params.keys, ...params};
          console.log("route val " + Object.keys(this.argsObj).length);
          if (Object.keys(this.argsObj).length < 4) {
            this.router.navigateByUrl('/');
          }
        }
      );
    this.getAnnonceByArgs();
  }

  getAnnonceByArgs() {
    //const req = this.annonceService.getAnnonceByArgs(this.argsObj["params"]["depart"], this.argsObj["params"]["arrive"]);
    const $req = this.annonceService.getAnnonceByArgs(this.argsObj["params"]["depart"], this.argsObj["params"]["arrive"], this.argsObj["params"]["date"]);
    $req.subscribe({
      next: (res) => {
        res.forEach(a => {
          console.log(a)
          let annonce = new Annonce();
          annonce.id = a.id;
          annonce.depart = a.depart;
          annonce.arrive = a.arrive;
          annonce.prix = a.prix;
          annonce.date = a.date;
          annonce.heureDepart = a.heureDepart;
          annonce.conducteur = a.conducteur;
          this.annonces.push(annonce)
        })
        console.log(this.annonces)
        this.filtredAnnonces = this.annonces;
      },
      error: err => {
        console.log(err)
      }
    });
  }

  reset() {
    this.filterArgs.reset();
    this.filtredAnnonces = this.annonces;
  }

  filter() {
    if (this.filterArgs.value.includes('prix')) {
      this.filtredAnnonces = this.annonces.slice().sort((a, b) => a.prix - b.prix)
    } else if (this.filterArgs.value.includes('date')) {
      this.filtredAnnonces = this.annonces.slice().sort((a, b) => new Date(a.date).setHours(0, 0, 0, 0) - new Date(b.date).setHours(0, 0, 0, 0))
    } else if (this.filterArgs.value.includes('date', 'prix')) {
      this.filtredAnnonces = this.annonces.slice().sort((a, b) => new Date(a.date).setHours(0, 0, 0, 0) - new Date(b.date).setHours(0, 0, 0, 0) && a.prix - b.prix)
    }
  }

}
