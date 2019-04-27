import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PojoService {
islogin: boolean;
private userName: String;

  constructor() { }

  setIsLogin(val: boolean) {
    this.islogin = val;
  }
  getIsLogin() {
    return this.islogin;
  }

  public  getUserName(): String {
    return this.userName;
  }
  public setUserName(userName: String): void {
    this.userName = userName;
  }
}
