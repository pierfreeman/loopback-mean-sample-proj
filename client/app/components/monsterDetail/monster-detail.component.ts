import {Component, Input} from '@angular/core';

import {Monster} from "../../models/monster";

@Component({
    selector: 'my-monster-detail',
    templateUrl: './app/components/monsterDetail/monster-detail.component.html'
})

export class MonsterDetailComponent {
    @Input()
    monster: Monster;

}

