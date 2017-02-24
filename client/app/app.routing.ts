import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import {MonstersComponent} from "./components/monsters/monsters.component";
import {MonsterDetailComponent} from "./components/monsterDetail/monster-detail.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'hero_detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'monsters',
    component: MonstersComponent
  },
  {
    path: 'monster_detail/:id',
    component: MonsterDetailComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
