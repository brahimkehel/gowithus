import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {AdminViewComponent} from "./admin-view/admin-view.component";
import { EditProfilComponent } from './admin-view/edit-profil/edit-profil.component';
import {AppRoutingModule} from "../app-routing.module";
import { SendMailComponent } from './admin-view/send-mail/send-mail.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { UsersComponent } from './admin-view/users/users.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTabsModule} from "@angular/material/tabs";
import {UserDetailsDialogComponent} from "./admin-view/user-details-dialog/user-details-dialog.component";
import { UsersTableComponent } from './admin-view/users/users-table/users-table.component';

@NgModule({
  declarations: [
    AdminViewComponent,
    EditProfilComponent,
    SendMailComponent,
    UsersComponent,
    UserDetailsDialogComponent,
    UsersTableComponent,
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatPaginatorModule,
        MatTableModule,
        MatProgressBarModule,
        MatTabsModule,
    ]
})
export class AdminModule { }
