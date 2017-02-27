import { LoopBackConfig } from './shared/sdk/'
import {BASE_URL, API_VERSION} from "./shared/sdk/base.url";

export class AppComponent {
  constructor() {
    LoopBackConfig.setBaseURL(BASE_URL);
    LoopBackConfig.setApiVersion(API_VERSION);
  }
}
