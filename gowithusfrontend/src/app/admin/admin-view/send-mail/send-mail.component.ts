import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatChipInputEvent} from "@angular/material/chips";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {UtilisateurService} from "../../../services/utilisateur.service";
import {Router} from "@angular/router";
import {LoaderService} from "../../../services/loader.service";

@Component({
  selector: 'app-send-mail',
  templateUrl: './send-mail.component.html',
  styleUrls: ['./send-mail.component.css']
})
export class SendMailComponent implements OnInit {
  @ViewChild('userInput') userInput!: ElementRef<HTMLInputElement>;
  userCtrl = new FormControl();
  filteredUsers!: Observable<any[]>;
  users: any[] = [];
  allUsers: any[] = [];
  emails: string[] = [];
  isLoading=false;
  constructor(private utilisateurService: UtilisateurService,private router:Router,private loaderService:LoaderService) {
    this.filteredUsers = this.userCtrl.valueChanges.pipe(
      startWith(null),
      map((user: any) => (user ? this._filter(user) : this.allUsers.slice().filter(u => !this.users.includes(u)))),
    );
    this.loaderService.isLoading.subscribe((data)=>this.isLoading=data);
  }

  ngOnInit(): void {
    this.utilisateurService.getAllApprouved().subscribe(
      {
        next: (res: any) => {
          console.log(res)
          this.allUsers = [...res];
        },
        error: (err) => {
        },
        complete: () => console.log(this.allUsers)
      })
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value && value.match("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$")) {
      this.users.push(value);
    }
    event.chipInput!.clear();
    this.userCtrl.setValue(null);
  }

  remove(user: any): void {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
      this.emails.splice(index, 1);
    }
    console.log(this.emails,this.users)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.users.push(event.option.viewValue);
    this.emails.push(event.option.value);
    this.userInput.nativeElement.value = '';
    this.userCtrl.setValue(null);
  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.allUsers.filter(user => user.nom.toLowerCase().includes(filterValue)
                                || user.prenom.toLowerCase().includes(filterValue));
  }
  sendMail(objet:string,content:string){
    const usersEmail=new Set(this.emails);
    this.utilisateurService.sendMail(Array.from(usersEmail),objet,content).subscribe({
      next:(res)=>this.router.navigateByUrl("/admin"),
      error:(err)=>console.log(err),
      complete:()=>{}
    });
  }
}
