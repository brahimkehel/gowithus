import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AppRoutingModule } from '../app-routing.module';
import {MatProgressBarModule} from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    DefaultComponent
  ],
    imports: [
        CommonModule,
        SharedComponentsModule,
        AppRoutingModule,
        MatProgressBarModule
    ]
})
export class LayoutsModule { }
