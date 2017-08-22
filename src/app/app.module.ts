import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from @angular/platform-browser/animations;
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
