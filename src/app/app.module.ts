import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { NavComponent } from './components/nav/nav.component';
import { PokeTableComponent } from './components/poke-table/poke-table.component';
import { PokeCardComponent } from './components/poke-card/poke-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

    PokemonPageComponent,
    NavComponent,
    PokeTableComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
