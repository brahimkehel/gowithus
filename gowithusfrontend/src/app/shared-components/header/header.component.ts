import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UtilisateurService} from "../../services/utilisateur.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any = ""

  constructor(private router: Router, private conducteurService: UtilisateurService) {
    this.conducteurService.username.subscribe(newVal => {
      this.username = newVal
    })
  }

  username: string = "";

  ngOnInit(): void {
    if (sessionStorage.getItem("user")) {
      this.conducteurService.username.next(sessionStorage.getItem("user")!)
      this.role = sessionStorage.getItem("role");
    }

  }

  onAuth() {
    if (this.username === "Connectez-vous") {
      this.router.navigateByUrl("/auth")
    } else {
      sessionStorage.clear()
      this.conducteurService.username.next("Connectez-vous");
      this.router.navigateByUrl("/");
    }
  }

}
