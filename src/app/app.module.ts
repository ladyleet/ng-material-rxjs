import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdToolbarModule, MdSidenavModule, MdProgressBarModule, MdListModule, MdGridListModule, MdCardModule, MdTooltipModule, MdTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { TeamService } from './team.service';
import { OperatorsService } from './operators.service';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { OperatorsComponent } from './operators/operators.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    OperatorsComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    MdButtonModule, 
    MdIconModule, 
    MdToolbarModule, 
    MdSidenavModule,
    MdProgressBarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdTooltipModule
  ],
  providers: [TeamService, OperatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
