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
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private annonceService: AnnonceService) {
  }

  ngOnInit(): void {
    this.getAnnoncesByConducteur();
  }

  getAnnoncesByConducteur() {
    const $req = this.annonceService.getAnnonceByConducteurId(4);
    $req.subscribe({
      next: (res) => {
        res.forEach(a => {
          this.annonces.push(new Annonce(a._id, a._depart, a._arrive, a._prix, a._date, a._heureDepart, a._conducteur))
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
