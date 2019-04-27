import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {PojoService} from '../../service/pojo.service';
import {ApiinfoService} from '../../service/http/apiinfo.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formLogin: FormGroup;
  constructor(private pojoService: PojoService, private fb: FormBuilder,
    private router: Router, private activatedRoute: ActivatedRoute, private apiinfoService: ApiinfoService) {      }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  login() {
    console.log('Came' + this.formLogin.get('username').value + this.formLogin.get('password').value);
    const usrDetails = {
      'username': this.formLogin.get('username').value,
      'password': this.formLogin.get('password').value,
    };
    this.apiinfoService.postApi('getToken', usrDetails).subscribe(
      resp => {
        /*console.log('iiiiiiiiiiiiinnnnnnnnnnnnnnnnn');
        console.log(resp);
        console.log(resp.headers.get('test'));*/
        localStorage.setItem('chiti-token', resp.headers.get('test'));
        this.apiinfoService.setToken();
        this.pojoService.setIsLogin(true);
        this.pojoService.setUserName(usrDetails['username']);
        console.log('from login:' + this.pojoService.getUserName());
      this.router.navigate(['/home']);

      }, error => {
        console.log('error' + JSON.stringify(error));
      },
      () => {
        console.log('Donnnoooo Done');
      }
    );
    /*if (this.formLogin.get('username').value === 'naveen') {
      console.log('Came2555');
      this.pojoService.setIsLogin(true);
      this.router.navigate(['/home']);
    }*/
  }
}
