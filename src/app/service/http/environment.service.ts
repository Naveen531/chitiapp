import { Injectable } from '@angular/core';
import {EnvironmentConstant, Constants} from '../EnvironmentConstant';
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  constructor() { }
  getBaseUrl() {
    return EnvironmentConstant[Constants.SERVER.DEFAULT_ENVIRONMENT].baseUrl;
  }
  getApiUrl(apiName) {
    return EnvironmentConstant[Constants.SERVER.DEFAULT_ENVIRONMENT][apiName];
  }
}
