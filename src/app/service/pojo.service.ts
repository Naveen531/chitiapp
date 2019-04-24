import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PojoService {
islogin: boolean;
  constructor() { }

  setIsLogin(val: boolean) {
    this.islogin = val;
  }
  getIsLogin() {
    return this.islogin;
  }
}
