import { Component, OnInit } from '@angular/core';
import {PojoService} from './service/pojo.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiinfoService} from './service/http/apiinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chittiApp';
  valid = false;

  constructor(private apiinfoService: ApiinfoService,
    private pojoService: PojoService,
    private route: Router) {

  }
  ngOnInit(): void {
    console.log('1st valid::' + this.valid);
    console.log('localstore:' + localStorage.getItem('chiti-token'));
    if (localStorage.getItem('chiti-token')) {
      this.apiinfoService.setToken();
       this.apiinfoService.getApi('validToken', '').subscribe(
        data => {
          this.valid = true;
          console.log('in api valid::' + this.valid);
          this.pojoService.setUserName(data['user']);
          console.log(JSON.stringify(data));
          if (data['msg'] !== 'Valid Token') {
            this.route.navigate(['/login']);
          }
        }, error => {
          this.valid = true;
          console.log('error' + JSON.stringify(error));
          this.route.navigate(['/login']);
        }, () => {
          console.log('middle valid::' + this.valid);

        }
      );
    } else {
      this.valid = true;
      this.route.navigate(['/login']);
    }

    console.log('2st valid::' + this.valid);

  }
}
