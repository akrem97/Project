import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuiComponent } from './qui/qui.component';
import { SalleRComponent } from './salle-r/salle-r.component';
import { SalleCComponent } from './salle-c/salle-c.component';
import { AssociatesComponent } from './associates/associates.component';
import { ClubComponent } from './club/club.component';
import { FilmComponent } from './film/film.component';
import { EvenementComponent } from './evenement/evenement.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { ContactComponent } from './contact/contact.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdresseComponent } from './adresse/adresse.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuiComponent,
    SalleRComponent,
    SalleCComponent,
    AssociatesComponent,
    ClubComponent,
    FilmComponent,
    EvenementComponent,
    GalerieComponent,
    HebergementComponent,
    ContactComponent,
    ReservationComponent,
    AdresseComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
