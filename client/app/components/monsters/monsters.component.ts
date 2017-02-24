import {Component, OnInit} from '@angular/core';
import {Monster} from "../../models/monster";
import {MonsterService} from "../../services/monster.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-monsters',
    templateUrl: './app/components/monsters/monsters-component.html',
})

export class MonstersComponent implements OnInit{
    monsters: Monster[];
    selectedMonster: Monster;

    constructor(
        private monsterService: MonsterService,
        private router: Router) {}

    ngOnInit(): void {
        this.getMonsters();
    }

    getMonsters(): void {
        this.monsterService.getMonsters().then(monsters => this.monsters = monsters);
    }

    onSelect(monster: Monster) { this.selectedMonster = monster; }

    gotoDetail() {
        this.router.navigate(['/monster_detail', this.selectedMonster._id]);
    }



}