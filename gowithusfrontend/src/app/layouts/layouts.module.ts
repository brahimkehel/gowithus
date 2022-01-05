import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AppRoutingModule
  ]
})
export class LayoutsModule { }
