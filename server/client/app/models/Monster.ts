/* tslint:disable */
import {
  Review,
  Reviewer
} from '../shared/sdk/index';

declare var Object: any;
export interface MonsterInterface {
  name: string;
  power: number;
  id?: any;
  reviews?: Review[];
  reviewers?: Reviewer[];
}

export class Monster implements MonsterInterface {
  name: string;
  power: number;
  id: any;
  reviews: Review[];
  reviewers: Reviewer[];
  constructor(data?: MonsterInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Monster`.
   */
  public static getModelName() {
    return "Monster";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Monster for dynamic purposes.
  **/
  public static factory(data: MonsterInterface): Monster{
    return new Monster(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Monster',
      plural: 'Monsters',
      properties: {
        name: {
          name: 'name',
          type: 'string'
        },
        power: {
          name: 'power',
          type: 'number'
        },
        id: {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        reviews: {
          name: 'reviews',
          type: 'Review[]',
          model: 'Review'
        },
        reviewers: {
          name: 'reviewers',
          type: 'Reviewer[]',
          model: 'Reviewer'
        },
      }
    }
  }
}
