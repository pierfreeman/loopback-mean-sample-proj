/* tslint:disable */
import {
  Review
} from '../shared/sdk/index';

declare var Object: any;
export interface ReviewerInterface {
  realm?: string;
  username?: string;
  password: string;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  id?: any;
  monsterId?: any;
  accessTokens?: any[];
  reviews?: Review[];
}

export class Reviewer implements ReviewerInterface {
  realm: string;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  id: any;
  monsterId: any;
  accessTokens: any[];
  reviews: Review[];
  constructor(data?: ReviewerInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Reviewer`.
   */
  public static getModelName() {
    return "Reviewer";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Reviewer for dynamic purposes.
  **/
  public static factory(data: ReviewerInterface): Reviewer{
    return new Reviewer(data);
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
      name: 'Reviewer',
      plural: 'Reviewers',
      properties: {
        realm: {
          name: 'realm',
          type: 'string'
        },
        username: {
          name: 'username',
          type: 'string'
        },
        password: {
          name: 'password',
          type: 'string'
        },
        email: {
          name: 'email',
          type: 'string'
        },
        emailVerified: {
          name: 'emailVerified',
          type: 'boolean'
        },
        verificationToken: {
          name: 'verificationToken',
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
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
        reviews: {
          name: 'reviews',
          type: 'Review[]',
          model: 'Review'
        },
      }
    }
  }
}
