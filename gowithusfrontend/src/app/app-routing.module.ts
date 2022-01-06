import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'acceuil',pathMatch:'full'},
  { path: '', component: DefaultComponent,
    children:[
      {
        path:'acceuil',
        component:AcceuilComponent
      },
      {path:'login',component:LoginComponent}
    ] },
    {path:'**',redirectTo:'acceuil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
