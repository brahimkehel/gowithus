import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Passager} from "../../../models/passager";
import {Conducteur} from "../../../models/conducteur";

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.css']
})
export class UserDetailsDialogComponent implements OnInit {
  passager?:Passager;
  conducteur?:Conducteur;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void {
    console.log(this.data.obj)
    if(this.data.user_type=="ca" || this.data.user_type=="cna") this.conducteur=this.data.obj;
    else if(this.data.user_type=="p") this.passager=this.data.obj;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
