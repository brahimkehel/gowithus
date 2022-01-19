import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Annonce} from "../../models/annonce";
import {ReservationService} from "../../services/reservation.service";
import {UtilisateurService} from "../../services/utilisateur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {
  username:string=""

  constructor(public dialogRef: MatDialogRef<ReservationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Annonce, private reservationService: ReservationService,private utilisateurService:UtilisateurService,private router:Router) {
    this.utilisateurService.username.subscribe(newVal => {
      this.username = newVal
    })
  }

  ngOnInit(): void {
  }

  Reserver(id:number) {
    const req$ = this.reservationService.addReservation(id);
    req$.subscribe({
      next: () => {
        console.log("added");
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  AuthRedirect(){
    this.router.navigateByUrl('auth')
    this.dialogRef.close();
  }
}
