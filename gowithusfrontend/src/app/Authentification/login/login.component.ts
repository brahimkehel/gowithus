import {Component, OnInit} from '@angular/core';
import {UtilisateurService} from "../../services/utilisateur.service";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private conducteurService: UtilisateurService, private router: Router, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
  }

  helper = new JwtHelperService();

  onLogin(loginForm: any) {
    this.conducteurService.login(
      loginForm.form.controls.email.value,
      loginForm.form.controls.password.value
    ).subscribe({
        next: (res: any) => {
          //console.log(this.helper.decodeToken(res["access_token"]));
          let decodedToken = this.helper.decodeToken(res["access_token"]);
          sessionStorage.setItem("token", res["access_token"]);
          sessionStorage.setItem("refresh-token", res["refresh_token"]);
          sessionStorage.setItem("user", decodedToken.sub)
          sessionStorage.setItem("exp",decodedToken.exp)
          this.conducteurService.username.next(decodedToken.sub);
          sessionStorage.setItem("role", decodedToken.roles[0])
          this.conducteurService.role.next(decodedToken.roles[0]);
          this.router.navigateByUrl("/");
        },
        error: (err) => {
          console.log(err)
          this._snackBar.open("login ou password incorrect", "Retry");
        },
        complete: () => {
          console.log("completed")
        }
      }
    )
  }


}
