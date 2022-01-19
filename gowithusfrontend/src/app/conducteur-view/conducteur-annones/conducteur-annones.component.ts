import {Component, OnInit, ViewChild} from '@angular/core';
import {Annonce} from "../../models/annonce";
import {AnnonceService} from "../../services/annonce.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-conducteur-annones',
  templateUrl: './conducteur-annones.component.html',
  styleUrls: ['./conducteur-annones.component.css']
})
export class ConducteurAnnonesComponent implements OnInit {
  displayedColumns: string[] = ['depart', 'arrive', 'prix', 'date', 'heureDepart'];
  annonces: Annonce[] = [];
  dataSource: any;
  clickedRows = new Set<Annonce>()
  isannoceAdded: boolean = false;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private annonceService: AnnonceService) {
    this.annonceService.messageNotification.subscribe({
      next: (res: string) => {
        if (res == "update") {
          this.annonces = []
          this.getAnnoncesByConducteur();
        }
      }
    })
  }

  ngOnInit(): void {
    this.getAnnoncesByConducteur();

  }

  getAnnoncesByConducteur() {
    const $req = this.annonceService.getAnnonceByConducteurId();
    $req.subscribe({
      next: (res) => {
        res.forEach(a => {
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
        this.dataSource = new MatTableDataSource(this.annonces);
        this.dataSource.paginator = this.paginator;
        console.log(this.annonces)
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
