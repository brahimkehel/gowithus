import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Annonce} from "../../models/annonce";
import {ReservationService} from "../../services/reservation.service";

@Component({
  selector: 'app-reservation-dialog',
  templateUrl: './reservation-dialog.component.html',
  styleUrls: ['./reservation-dialog.component.css']
})
export class ReservationDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ReservationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Annonce, private reservationService: ReservationService) {
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
}
