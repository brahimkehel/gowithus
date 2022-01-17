import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

import { SharedComponentsModule } from './shared-components/shared-components.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './Authentification/login/login.component';
import {RegisterComponent} from "./Authentification/register/register.component";
import {TrajetsComponent} from "./trajets/trajets.component";
import {HttpClientModule} from "@angular/common/http";
import {TrajetComponent} from "./trajets/trajet/trajet.component";
import {MatIconModule} from "@angular/material/icon";
import { ConducteurViewComponent } from './conducteur-view/conducteur-view.component';
import { ConducteurFormComponent } from './conducteur-view/conducteur-form/conducteur-form.component';
import { ConducteurAnnonesComponent } from './conducteur-view/conducteur-annones/conducteur-annones.component';

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
    ConducteurAnnonesComponent
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
    HttpClientModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
