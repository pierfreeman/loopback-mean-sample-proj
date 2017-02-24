import {Injectable} from '@angular/core';
import {Monster} from "../models/monster";
import {MONSTERS} from "../mock-monster";

@Injectable()
export class MonsterService {
    getMonsters(): Monster[] {
        return MONSTERS;
    }
}