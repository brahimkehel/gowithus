import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultComponent} from './default/default.component';
import {SharedComponentsModule} from '../shared-components/shared-components.module';
import {AppRoutingModule} from '../app-routing.module';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatIconModule,
  ]
})
export class LayoutsModule {
}
