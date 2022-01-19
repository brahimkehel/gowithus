import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../services/annonce.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Annonce} from "../models/annonce";

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.component.html',
  styleUrls: ['./trajets.component.css']
})
export class TrajetsComponent implements OnInit {
  private argsObj: any;
  annonces: Annonce[] = [];

  constructor(private annonceService: AnnonceService, private route: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.route.queryParamMap
      .subscribe(params => {
          this.argsObj = {...params.keys, ...params};
          console.log("route val "+ Object.keys(this.argsObj).length);
          if(Object.keys(this.argsObj).length<4){
            this.router.navigateByUrl('/');
          }
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
          this.annonces.push(new Annonce(a._id,a._depart,a._arrive,a._prix,a._date,a._heureDepart,a._conducteur))
        })
        console.log(this.annonces)
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
