import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { AssociatesComponent } from './associates/associates.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FilmComponent } from './film/film.component';
import { GalerieComponent } from './galerie/galerie.component';
import { HebergementComponent } from './hebergement/hebergement.component';
import { QuiComponent } from './qui/qui.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SalleCComponent } from './salle-c/salle-c.component';
import { SalleRComponent } from './salle-r/salle-r.component';

const routes: Routes = [

{path:"",component:QuiComponent},
{path:"salle-c",component:SalleCComponent},
{path:"salle-r",component:SalleRComponent},
{path:"associates",component:AssociatesComponent},
{path:"club",component:ClubComponent},
{path:"film",component:FilmComponent},
{path:"evenement",component:EvenementComponent},
{path:"galerie",component:GalerieComponent},
{path:"hebergement",component:HebergementComponent},
{path:"contact",component:ContactComponent},
{path:"reservation",component:ReservationComponent},
{path:"adresse",component:AdresseComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
