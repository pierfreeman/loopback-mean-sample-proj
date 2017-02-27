/* tslint:disable */
import {
  Monster,
  Reviewer
} from '../index';

declare var Object: any;
export interface ReviewInterface {
  date?: Date;
  rating?: number;
  comments: string;
  id?: any;
  monsterId?: any;
  publisherId?: any;
  monster?: Monster;
  reviewer?: Reviewer;
}

export class Review implements ReviewInterface {
  date: Date;
  rating: number;
  comments: string;
  id: any;
  monsterId: any;
  publisherId: any;
  monster: Monster;
  reviewer: Reviewer;
  constructor(data?: ReviewInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Review`.
   */
  public static getModelName() {
    return "Review";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Review for dynamic purposes.
  **/
  public static factory(data: ReviewInterface): Review{
    return new Review(data);
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
      name: 'Review',
      plural: 'Reviews',
      properties: {
        date: {
          name: 'date',
          type: 'Date'
        },
        rating: {
          name: 'rating',
          type: 'number'
        },
        comments: {
          name: 'comments',
          type: 'string'
        },
        id: {
          name: 'id',
          type: 'any'
        },
        monsterId: {
          name: 'monsterId',
          type: 'any'
        },
        publisherId: {
          name: 'publisherId',
          type: 'any'
        },
      },
      relations: {
        monster: {
          name: 'monster',
          type: 'Monster',
          model: 'Monster'
        },
        reviewer: {
          name: 'reviewer',
          type: 'Reviewer',
          model: 'Reviewer'
        },
      }
    }
  }
}
