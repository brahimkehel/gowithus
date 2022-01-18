import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {AcceuilComponent} from './acceuil/acceuil.component';

import {ConducteurViewComponent} from "./conducteur-view/conducteur-view.component";
import {TrajetsComponent} from './trajets/trajets.component';
import {AuthenticationComponent} from "./Authentification/authentication.component";
import {LoginComponent} from "./Authentification/login/login.component";
import {RegisterComponent} from "./Authentification/register/register.component";
import {AuthGuard} from "./services/auth.guard";
import {IsLoggedGuard} from "./services/is-logged.guard";


const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'acceuil',
        component: AcceuilComponent
      },
      { path: 'conducteurview', component: ConducteurViewComponent },
      {path: 'trajets', component: TrajetsComponent , canActivate:[AuthGuard]},
      {
        path: 'auth', component: AuthenticationComponent,canActivate:[IsLoggedGuard] , children: [
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

