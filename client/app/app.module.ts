import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { MonstersComponent } from "./components/monsters/monsters.component";
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { MonsterDetailComponent } from './components/monsterDetail/monster-detail.component';

import { HeroService }  from './services/hero.service';
import { MonsterService } from "./services/monster.service";
import {HeroSearchComponent} from "./components/heroSearch/hero-search.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    MonstersComponent,
    DashboardComponent,
    HeroDetailComponent,
    MonsterDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    MonsterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
