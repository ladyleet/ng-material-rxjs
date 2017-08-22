import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MdToolbarModule, MdIconModule, MdSidenavModule, MdButtonModule, MdProgressBarModule, MdGridListModule, MdListModule, MdCardModule, MdTooltipModule } from '@angular/material';

import { routing } from './app.routing';

import 'hammerjs';

import { TeamService } from './team.service';
import { OperatorsService } from './operators.service';

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
    BrowserAnimationsModule,
    MdToolbarModule, 
    MdIconModule, 
    MdSidenavModule, 
    MdButtonModule,
    MdProgressBarModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdTooltipModule,
    routing
  ],
  providers: [TeamService, OperatorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
