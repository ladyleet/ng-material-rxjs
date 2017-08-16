import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdButtonModule, MdIconModule, MdSidenavModule, MdProgressBarModule, MdGridListModule, MdListModule, MdCardModule, MdTooltipModule, MdTabsModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { routing } from './app.routing';

import 'hammerjs';

import { TeamService } from './team.service';
import { OperatorsService } from './operators.service';

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
    MdToolbarModule, 
    MdButtonModule, 
    MdIconModule, 
    MdSidenavModule,
    MdProgressBarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTooltipModule,
    BrowserAnimationsModule,
    MdTabsModule
  ],
  providers: [OperatorsService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
