import { Component, OnInit } from '@angular/core';
import {PassagerService} from "../../services/passager.service";
import {Annonce} from "../../models/annonce";

@Component({
  selector: 'app-passager-reservations',
  templateUrl: './passager-reservations.component.html',
  styleUrls: ['./passager-reservations.component.css']
})
export class PassagerReservationsComponent implements OnInit {
  annonces: Annonce[] = [];
  type:string="personal";

  constructor(private passagerService:PassagerService) { }

  ngOnInit(): void {
    this.getPassagerReservations();
  }

  getPassagerReservations(){
    const $req=this.passagerService.getPassagerReservations();
    $req.subscribe({
      next:(res)=>{
        this.annonces=[...res];
      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("completed");
      }
    })
  }
}
