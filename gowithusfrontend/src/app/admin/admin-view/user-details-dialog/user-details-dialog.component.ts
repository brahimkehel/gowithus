import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Passager} from "../../../models/passager";
import {Conducteur} from "../../../models/conducteur";
import {UtilisateurService} from "../../../services/utilisateur.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.css']
})
export class UserDetailsDialogComponent implements OnInit {
  passager?: Passager;
  conducteur?: Conducteur;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilisateurService: UtilisateurService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.data.obj)
    if (this.data.user_type == "ca" || this.data.user_type == "cna") this.conducteur = this.data.obj;
    else if (this.data.user_type == "p") this.passager = this.data.obj;
  }

  setConducteurApprouved(id: number) {
    this.utilisateurService.setApprouvedConducteur(id).subscribe({
      next: () => {
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('compeleeeeeted')
        this.openSnackBar("Approuvé par succés", "Ok");
        this.dialogRef.close();
      }
    })
  }

  deleteUser(id: number) {
    this.utilisateurService.deleteUser(id).subscribe({
      next: () => {
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.openSnackBar("Supprimé par succés", "Ok");
        this.dialogRef.close();
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
