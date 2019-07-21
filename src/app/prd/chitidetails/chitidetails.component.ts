import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PojoService } from '../../service/pojo.service';
import { GetdataService } from '../../service/getdata.service';
import {ApiinfoService} from '../../service/http/apiinfo.service';
@Component({
  selector: 'app-chitidetails',
  templateUrl: './chitidetails.component.html',
  styleUrls: ['./chitidetails.component.css']
})
export class ChitidetailsComponent implements OnInit {
  chitiname: any = '';
  chitidetails: any = {};
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
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
    private getdataService: GetdataService,
    private apiinfoService: ApiinfoService,
    private pojoService: PojoService
  ) { }

  ngOnInit() {
    console.log('calling chiti view');
    this.getChitName();
  }
  dateFormat(date) {
    const today = new Date(date);
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let dateReturn;
    let day = '' + dd;
    let month = '' + mm;
    console.log(dd);
    if ( dd < 10 ) {
        day = '0' + dd;
    }
    if (mm < 10) {
        month = '0' + mm;
    }
    dateReturn = day + '-' + month + '-' + yyyy;
    return dateReturn;
    /*today = mm+'-'+dd+'-'+yyyy;
    console.log(today);
    today = mm+'/'+dd+'/'+yyyy;
    console.log(today);
    today = dd+'-'+mm+'-'+yyyy;
    console.log(today);
    today = dd+'/'+mm+'/'+yyyy;
    console.log(today);*/
  }
  getChiti() {
    this.apiinfoService.getApi('getChiti', {chitname: this.chitiname}).subscribe(
      data => {
        console.log(data['data']);
        const diff = this.monthDiff(new Date(data['data']['startDate']), new Date(data['data']['endDate']));
        console.log('diff:' + diff);
        data['data']['startDate'] = this.dateFormat(data['data']['startDate']);
        data['data']['endDate'] = this.dateFormat(data['data']['endDate']);
        this.chitidetails = data['data'];
        this.chitidetails['diff'] = diff;
      }, error => {}, () => {}
    );
  }
  monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
  getChitName() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        console.log('chitname:' + params['chitName']);
        if (params['chitName'] && params['chitName'] !== undefined) {
          console.log('haha came');
          this.chitiname = params['chitName'];
          this.getChiti();
        }
      }, error => {

      }, () => {
      }
    );
  }

  goToMemberPerformance() {
    this.router.navigate(['/home/memperformance'], {
      queryParams: {
        id: '1'
      }
    });
  }

}
