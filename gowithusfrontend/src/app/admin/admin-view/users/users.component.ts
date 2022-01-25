import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {UtilisateurService} from "../../../services/utilisateur.service";
import {MatTableDataSource} from "@angular/material/table";
import {Conducteur} from "../../../models/conducteur";
import {MatDialog} from "@angular/material/dialog";
import {UserDetailsDialogComponent} from "../user-details-dialog/user-details-dialog.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data_type_ca="ca";
  data_type_cna="cna";
  data_type_p="p";

  ngOnInit(): void {
  }

}
