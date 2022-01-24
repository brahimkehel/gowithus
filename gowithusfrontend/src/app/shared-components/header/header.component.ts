import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {UtilisateurService} from "../../services/utilisateur.service";
import {LoaderService} from "../../services/loader.service";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any = ""
  username: string = "";
  @Input() sidenav!:MatSidenav;

  constructor(private router: Router, private conducteurService: UtilisateurService,private isloaded:LoaderService) {
    this.conducteurService.username.subscribe(newVal => {
      this.username = newVal
    })
    this.conducteurService.role.subscribe(value=>this.role=value);
  }



  ngOnInit(): void {
    if (sessionStorage.getItem("user")) {
      this.conducteurService.username.next(sessionStorage.getItem("user")!)
      this.role = sessionStorage.getItem("role");
    }

  }

  onAuth() {
    if (this.username === "Connectez-vous") {
      this.isloaded.isLoading.next(false);
      this.router.navigateByUrl("/auth")
    } else {
      sessionStorage.clear()
      this.conducteurService.username.next("Connectez-vous");
      this.router.navigateByUrl("/");
    }
  }



}
