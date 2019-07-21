import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PojoService} from '../service/pojo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, private activatedRoute: ActivatedRoute, private pojoService: PojoService

  ) { }

  ngOnInit() {
    console.log('===============================:' + this.pojoService.getUserName());
  }
  goto(gotoVal: string) {
    switch (gotoVal) {
      case 'addchiti': {
        this.router.navigate(['/home/addchiti']);
        break;
      }
      case 'viewchiti': {
        this.router.navigate(['/home/viewchtis']);

        break;
      }
      case 'addmembers': {
        break;
      }
      default: {
        break;
      }
    }
  }
}
