import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {UtilisateurService} from "../../../services/utilisateur.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['Nom', 'Prenom', 'Username', 'Email', 'Tel','Action'];
  dataSource:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private utilisateurService: UtilisateurService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAllUsers() {
    this.utilisateurService.getAllApprouved().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
      }
    })
  }

}
