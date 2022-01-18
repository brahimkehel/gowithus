import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


import {MatIconModule} from "@angular/material/icon";
import { ConducteurViewComponent } from './conducteur-view/conducteur-view.component';
import { ConducteurFormComponent } from './conducteur-view/conducteur-form/conducteur-form.component';
import { ConducteurAnnonesComponent } from './conducteur-view/conducteur-annones/conducteur-annones.component';
import { ReservationDialogComponent } from './trajets/reservation-dialog/reservation-dialog.component';
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from '@angular/material/snack-bar';


import {SharedComponentsModule} from './shared-components/shared-components.module';
import {LayoutsModule} from './layouts/layouts.module';
import {LoginComponent} from './Authentification/login/login.component';
import {RegisterComponent} from "./Authentification/register/register.component";
import {AcceuilComponent} from './acceuil/acceuil.component';
import {AuthenticationComponent} from "./Authentification/authentication.component";
import {TrajetComponent} from "./trajets/trajet/trajet.component";
import {TrajetsComponent} from "./trajets/trajets.component";
import {UtilisateurService} from "./services/utilisateur.service";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TokenInterceptor} from "./services/token.interceptor";
import {ValidateEqualModule} from "ng-validate-equal";

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    TrajetComponent,
    TrajetsComponent,
    ConducteurViewComponent,
    ConducteurFormComponent,
    ConducteurAnnonesComponent,
    ReservationDialogComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedComponentsModule,
    LayoutsModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    ValidateEqualModule,
  ],
  providers: [UtilisateurService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
