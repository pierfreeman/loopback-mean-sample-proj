import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import { MonsterService } from '../../services/monster.service';
import { Monster } from "../../models/monster";

@Component({
    selector: 'my-monster-detail',
    templateUrl: './app/components/monsterDetail/monster-detail.component.html'
})

export class MonsterDetailComponent implements OnInit {
    @Input()
    monster: Monster;

    constructor(
        private monsterService: MonsterService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.monsterService.getMonster(+params['id']))
            .subscribe(monster => this.monster = monster);
    }

    goBack(): void {
        window.history.back();
    }

}

