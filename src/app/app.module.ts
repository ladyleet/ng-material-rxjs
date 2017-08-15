import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdIconModule, MdButtonModule, MdSidenavModule, MdGridListModule, MdListModule, MdProgressBarModule, MdCardModule } from '@angular/material';
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
    MdIconModule, 
    MdButtonModule, 
    MdSidenavModule,
    MdGridListModule,
    MdListModule,
    MdProgressBarModule,
    MdCardModule
  ],
  providers: [OperatorsService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
