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
import {AdminViewComponent} from "./admin/admin-view/admin-view.component";
import {EditProfilComponent} from "./admin/admin-view/edit-profil/edit-profil.component";
import {SendMailComponent} from "./admin/admin-view/send-mail/send-mail.component";
import {UsersComponent} from "./admin/admin-view/users/users.component";
import {AdminGuard} from "./services/admin.guard";
import {ConducteurGuard} from "./services/conducteur.guard";


const routes: Routes = [
  {path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  {
    path: '', component: DefaultComponent,
    children: [
      {
        path: 'acceuil',
        component: AcceuilComponent
      },
      {path: 'conducteurview', component: ConducteurViewComponent, canActivate:[ConducteurGuard]},
      {path: 'trajets', component: TrajetsComponent },
      {
        path: 'auth', component: AuthenticationComponent, canActivate: [IsLoggedGuard], children: [
          {path: '', component: LoginComponent},
          {path: 'register', component: RegisterComponent}
        ]
      }
    ]
  },
  {
    path: 'admin', component: AdminViewComponent, children: [
      {path: 'edit', component: EditProfilComponent},
      {path: 'sendmail', component: SendMailComponent},
      {path: 'users', component: UsersComponent}
    ],canActivate:[AdminGuard]
  },
  {path: '**', redirectTo: 'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

