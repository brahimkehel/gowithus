import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {AcceuilComponent} from './acceuil/acceuil.component';
//import { LoginComponent } from './login/login.component';
import {TrajetsComponent} from './trajets/trajets.component';
import {AuthenticationComponent} from "./Authentification/authentication.component";
import {LoginComponent} from "./Authentification/login/login.component";
import {RegisterComponent} from "./Authentification/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'acceuil',
        component: AcceuilComponent
      },
      {path: 'trajets', component: TrajetsComponent},
      {
        path: 'auth', component: AuthenticationComponent, children: [
          {path: '', component: LoginComponent},
          {path: 'register', component: RegisterComponent}
        ]
      }
    ]
  },
  {path: '**', redirectTo: 'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

