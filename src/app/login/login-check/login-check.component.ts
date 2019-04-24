import { Component, OnInit } from '@angular/core';
import {PojoService} from '../../service/pojo.service';
@Component({
  selector: 'app-login-check',
  templateUrl: './login-check.component.html',
  styleUrls: ['./login-check.component.css']
})
export class LoginCheckComponent implements OnInit {

  isLogin: boolean ;

  constructor(private pojoService: PojoService) {

  }
  ngOnInit(): void {
    console.log('jgkjbkjbjkbkjbkbk');
    this.isLogin = this.pojoService.getIsLogin();
  }

}
