import {Component, OnInit} from '@angular/core';
import {Conducteur} from "../../models/conducteur";
import {UtilisateurService} from "../../services/utilisateur.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {Passager} from "../../models/passager";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private conducteurService: UtilisateurService, private _snackBar: MatSnackBar, private router: Router) {
  }

  selectedRadio: string = "passager";

  ngOnInit(): void {
  }

  onRegisterHandler(formregister: any) {
    if (this.selectedRadio === "passager") {
      let passager: Passager = new Passager();
      passager._id = 0;
      passager._username = formregister.form.controls.email.value;
      passager._email = formregister.form.controls.email.value;
      passager._nom = formregister.form.controls.nom.value;
      passager._prenom = formregister.form.controls.prenom.value;
      passager._cin = "AD214578";
      passager._tel = formregister.form.controls.tel.value;
      passager._password = formregister.form.controls.password.value;
      this.conducteurService.registerPassager(passager).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/auth');
        },
        error: err => {
          this._snackBar.open("incorrect", "Retry");
          console.log(err)
        },
        complete: () => {
        }
      });
    } else {
      let conducteur: Conducteur = new Conducteur();
      conducteur.id = 0;
      conducteur.username = formregister.form.controls.email.value;
      conducteur.email = formregister.form.controls.email.value;
      conducteur.nom = formregister.form.controls.nom.value;
      conducteur.prenom = formregister.form.controls.prenom.value;
      conducteur.cin = "AD214578";
      conducteur.marque = formregister.form.controls.marque.value;
      conducteur.nb_places = formregister.form.controls.nb.value;
      conducteur.tel = formregister.form.controls.tel.value;
      conducteur.password = formregister.form.controls.password.value;
      this.conducteurService.registerConducteur(conducteur).subscribe({
        next: (res) => {
          this.router.navigateByUrl('/auth');
        },
        error: err => {
          this._snackBar.open("incorrect", "Retry");
          console.log(err)
        },
        complete: () => {
        }
      });
    }

  }

}
