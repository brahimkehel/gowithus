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

import {SharedComponentsModule} from './shared-components/shared-components.module';
import {LayoutsModule} from './layouts/layouts.module';
import {LoginComponent} from './Authentification/login/login.component';
import {RegisterComponent} from "./Authentification/register/register.component";
import {AcceuilComponent} from './acceuil/acceuil.component';
import {AuthenticationComponent} from "./Authentification/authentication.component";
import {TrajetComponent} from "./trajets/trajet/trajet.component";
import {TrajetsComponent} from "./trajets/trajets.component";
import {ConducteurService} from "./services/conducteur.service";


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    LoginComponent,
    RegisterComponent,
    AuthenticationComponent,
    TrajetComponent,
    TrajetsComponent
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
    MatDatepickerModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  providers: [ConducteurService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
