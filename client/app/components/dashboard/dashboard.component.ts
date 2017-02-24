/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Hero} from "../../models/hero";
import {HeroService} from "../../services/hero.service";

import {Monster} from "../../models/monster";
import {MonsterService} from "../../services/monster.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    monsters: Monster[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService,
        private monsterService: MonsterService) {
    }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
        this.monsterService.getMonsters()
            .then(monsters => this.monsters = monsters);
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero._id];
        this.router.navigate(link);
    }
}