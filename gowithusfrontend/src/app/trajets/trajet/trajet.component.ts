import {Component, Input, OnInit} from '@angular/core';
import {Annonce} from "../../models/annonce";
import {MatDialog} from "@angular/material/dialog";
import {ReservationDialogComponent} from "../reservation-dialog/reservation-dialog.component";

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css']
})
export class TrajetComponent implements OnInit {
  @Input() annonce: Annonce = new Annonce();
  @Input() type:string="";

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
    console.log(this.annonce)
  }

  openDialog(a: Annonce): void {
    const dialogRef = this.dialog.open(ReservationDialogComponent, {
      width: '300px',
      data: a,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  checkTimeAviablility(time: String, date: Date): boolean {
    let currentDate=new Date();
    let annonceDate=new Date(date);
    annonceDate.setHours(parseInt(time.split(":")[0]));
    annonceDate.setMinutes(parseInt(time.split(":")[1]));
    return annonceDate>currentDate;
  }
}
