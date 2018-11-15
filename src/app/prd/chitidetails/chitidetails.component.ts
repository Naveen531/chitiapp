import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chitidetails',
  templateUrl: './chitidetails.component.html',
  styleUrls: ['./chitidetails.component.css']
})
export class ChitidetailsComponent implements OnInit {
  chitiname: any = '';
  chitidetails: any = {
    chitiname: 'Oct Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
    enddate: '15-DEC-2018', chitilive: 'Y'
  };
  commDetails = [
    {month: 'Jan', percent: 9, soldfor: 40000, commision: 5000},
    {month: 'feb', percent: 9, soldfor: 40000, commision: 5000},
    {month: 'mar', percent: 9, soldfor: 40000, commision: 5000},
    {month: 'APR', percent: 9, soldfor: 40000, commision: 5000}
  ];
  memDetails = [
    {name: 'Naveen Kumar Reddy Redlavari', phoneno: 99989642186},
    {name: 'Naveen2', phoneno: 99989642186},
    {name: 'Naveen3', phoneno: 99989642186},
    {name: 'Naveen4', phoneno: 99989642186},
    {name: 'Naveen5', phoneno: 99989642186},
    {name: 'Naveen6', phoneno: 99989642186},
    {name: 'Naveen Kumar Reddy Redlavari', phoneno: 99989642186},
    {name: 'Naveen7', phoneno: 99989642186},
    {name: 'Naveen8', phoneno: 99989642186},
    {name: 'Naveen9', phoneno: 99989642186},
    {name: 'Naveen10', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
    {name: 'Naveen Kumar Reddy Redlavari', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
    {name: 'Naveen', phoneno: 99989642186},
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getChitName();
  }
  getChitName() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        if (params['chitName'] && params['chitName'] !== undefined) {
          this.chitiname = params['chitName'];
        }
      }, error => {

      }, () => {

      }
    );
  }

  goToMemberPerformance() {
    this.router.navigate(['/memperformance'], {
      queryParams: {
        id: '1'
      }
    });
  }

}
