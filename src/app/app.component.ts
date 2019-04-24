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

  constructor(private apiinfoService: ApiinfoService, private pojoService: PojoService, private route: Router) {

  }
  ngOnInit(): void {
    console.log('localstore:' + localStorage.getItem('chiti-token'));
    if (localStorage.getItem('chiti-token')) {
      this.apiinfoService.setToken();
       this.apiinfoService.getApi('validToken', '').subscribe(
        data => {
          if (data['msg'] !== 'Valid Token') {
            this.route.navigate(['/login']);
          }
        }, error => {
          console.log('error' + JSON.stringify(error));
          this.route.navigate(['/login']);
        }, () => {

        }
      );
    } else {
      this.route.navigate(['/login']);
    }
  }
}
