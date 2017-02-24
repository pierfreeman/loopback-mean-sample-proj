import {Injectable} from '@angular/core';
import {Monster} from "../models/monster";
import {MONSTERS} from "../mock-monster";

@Injectable()

//TODO: observable instead of promise
export class MonsterService {
    getMonsters(): Promise<Monster[]> {
        return Promise.resolve(MONSTERS);
    }

    getMonster(id: number): Promise<Monster> {
        return this.getMonsters().then(monsters => monsters.find(monster => monster._id === id));
    }
}