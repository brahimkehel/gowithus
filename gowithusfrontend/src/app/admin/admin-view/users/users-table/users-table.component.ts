import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Conducteur} from "../../../../models/conducteur";
import {MatPaginator} from "@angular/material/paginator";
import {UtilisateurService} from "../../../../services/utilisateur.service";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {UserDetailsDialogComponent} from "../../user-details-dialog/user-details-dialog.component";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  displayedColumns: string[] = ['Nom', 'Prenom', 'Username', 'Email', 'Tel', 'Action'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input() data_type?:String;

  constructor(private utilisateurService: UtilisateurService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    if(this.data_type=="ca") this.getAllConducteursApprouved();
    else if(this.data_type=="cna") this.getAllConducteursNonApprouved();
    else if(this.data_type=="p") this.getAllPassagers();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getAllConducteursApprouved() {
    this.utilisateurService.getAllConducteursApprouved().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    })
  }

  getAllConducteursNonApprouved() {
    this.utilisateurService.getAllConducteursNonApprouved().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {}
    })
  }

  getAllPassagers(){
    this.utilisateurService.getAllPassager().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{

      }
    })
  }

  openDialog(user: any): void {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      width: '400px',
      data: {
        obj: user,
        user_type:this.data_type
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
