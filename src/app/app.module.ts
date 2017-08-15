import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdSidenavModule, MdToolbarModule, MdIconModule, MdButtonModule, MdProgressBarModule, MdCardModule, MdGridListModule, MdListModule, MdTooltipModule } from '@angular/material'; 
import { routing } from './app.routing';

import 'hammerjs';

import { OperatorsService } from './operators.service';
import { TeamService } from './team.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OperatorsComponent } from './operators/operators.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OperatorsComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule, 
    routing,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdProgressBarModule,
    MdCardModule,
    MdGridListModule,
    MdListModule,
    MdTooltipModule
  ],
  providers: [TeamService, OperatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
