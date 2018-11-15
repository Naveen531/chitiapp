import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-memberchitiperformance',
  templateUrl: './memberchitiperformance.component.html',
  styleUrls: ['./memberchitiperformance.component.css']
})
export class MemberchitiperformanceComponent implements OnInit {
  chitidetails: any = {
    chitiname: 'Oct Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
    enddate: '15-DEC-2018', chitilive: 'Y', isTaken: 'N', isTakenMonth: 'Jan'
  };

  memAmountDetails: any = [
    {month: 'Jan', amtPaid: 10000, pendingAmt: 1000},
    {month: 'Feb', amtPaid: 10000, pendingAmt: 1000},
    {month: 'Mar', amtPaid: 10000, pendingAmt: 1000},
    {month: 'Jun', amtPaid: 10000, pendingAmt: 1000},
    {month: 'July', amtPaid: 10000, pendingAmt: 1000},
    {month: 'August', amtPaid: 10000, pendingAmt: 1000}
  ];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['/viewchtisdetails'], {
      queryParams: {
        chitiName: this.chitidetails['chitiname']
      }
    });
  }
}
