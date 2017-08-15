import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';


import 'hammerjs';

import { TeamService } from './team.service';
import { OperatorsService } from './operators.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { routing } from './app.routing';

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
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  providers: [OperatorsService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
