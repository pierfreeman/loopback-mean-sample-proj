import {Injectable} from '@angular/core';
import {Monster} from "../models/monster";
//import {MONSTERS} from "../mock-monster";

export const MONSTERS: Monster[] = [
    { id: 11, name: 'Beholder' },
    { id: 12, name: 'Licht' },
    { id: 13, name: 'Dragon' },
    { id: 14, name: 'Skeleton' },
    { id: 15, name: 'Wolf' },
    { id: 16, name: 'Ghost' },
    { id: 17, name: 'Ghoul' },
    { id: 18, name: 'Earth elemental' },
    { id: 19, name: 'Gnoll' },
    { id: 20, name: 'Orc' }
];

@Injectable()

//TODO: observable instead of promise
export class MonsterService {
    getMonsters(): Promise<Monster[]>{
        return Promise.resolve(MONSTERS);
    }

    getMonster(id: number): Promise<Monster>{
        return this.getMonsters().then(monsters => monsters.find(monster => monster.id === id))
    }
}