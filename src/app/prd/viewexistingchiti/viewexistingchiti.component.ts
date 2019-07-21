import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PojoService } from '../../service/pojo.service';
import { GetdataService } from '../../service/getdata.service';
import {ApiinfoService} from '../../service/http/apiinfo.service';

@Component({
  selector: 'app-viewexistingchiti',
  templateUrl: './viewexistingchiti.component.html',
  styleUrls: ['./viewexistingchiti.component.css']
})
export class ViewexistingchitiComponent implements OnInit {
  chtiDetalsArray = [];
  chitiCount = 0;
  pager: any = {};
  pagedata: any = [];
  dummypagedata: any = [];
  selectedsearch: any = 'Name';
  searchItems: any = [{ search: 'Name' }, { search: 'Amount' }, { search: 'Members' }];
  aliveOptions = ['ALL', 'Y', 'N'];
  chitMem: any = '';
  chitName: any = '';
  chitAmt: any = '';
  chitAliveFilter: any = 'ALL';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private getdataService: GetdataService,
    private apiinfoService: ApiinfoService,
    private pojoService: PojoService
  ) { }

  ngOnInit() {
    this.getChitisCount();
  }
  checkLive(mem, i) {
    const storedDate = new Date(mem['endDate']);
    const newDate = new Date();
    if (storedDate >= newDate ) {
      this.chtiDetalsArray[i]['chitilive'] = 'Y';
      return 'Y';
    } else {
      this.chtiDetalsArray[i]['chitilive'] = 'N';
      return 'N';
    }
  }

  getChitisCount() {
    this.apiinfoService.getApi('getChitisCount', {'user': this.pojoService.getUserName()} ).subscribe(
      data => {
        this.chitiCount = data['data'];
      }, error => {

      }, () => {
        this.setPage(1);

      }
    );
  }
  getChitiDetails(start, end) {
    this.apiinfoService.getApi('getChitis',
    {'user': this.pojoService.getUserName(), 'start': start, 'end': end} ).subscribe(
      data => {
        console.log(data['data']);
        this.pagedata = data['data'];
        this.chtiDetalsArray = data['data'];
      }, error => {}, () => {
      }
    );
  }
  onSearchChange(filterby: any, val: any) {

    switch (filterby) {
      case 'name': {
        if (val !== undefined && val.length > 0) {
          console.log('name if.');
          this.pagedata = this.pagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              console.log('Alllll');
              return name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1;

            } else {
              console.log('no Alllll:' + name['chitilive']);
              return (name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1 && name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitAmt.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            if (this.chitAliveFilter === 'ALL') {
              return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

            } else {
              return (name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitMem.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              // name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
              if (this.chitAliveFilter === 'ALL') {
                return name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            });
          }
        } else if (this.chitMem.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1

            if (this.chitAliveFilter === 'ALL') {
              return name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['amount'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

              return name['chitilive'] === this.chitAliveFilter;

            }
            );
          }
        }
        break;
      }
      case 'amt': {
        if (val !== undefined && val.length > 0) {
          this.pagedata = this.pagedata.filter(name => {
            // return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            if (this.chitAliveFilter === 'ALL') {
              return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitName.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // name => name['chitiName'].indexOf(val) > -1
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1 && name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitMem.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              if (this.chitAliveFilter === 'ALL') {
                return name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            }
            );
          }
        } else if (this.chitMem.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['amount'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

              return name['chitilive'] === this.chitAliveFilter;

            }
            );
          }
        }
        break;
      }
      case 'mem': {
        if (val !== undefined && val.length > 0) {
          this.pagedata = this.pagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['members'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitName.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiName'].toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitAmt.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              if (this.chitAliveFilter === 'ALL') {
                return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            }
            );
          }
        } else if (this.chitAmt.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['amount'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['amount'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

              return name['chitilive'] === this.chitAliveFilter;

            }
            );
          }
        }
        break;
      }
      default: {
        break;
      }
    }
  }
  getSearchData() {

  }
  onChange(dropVal: any) {
    this.chitAliveFilter = dropVal;
    // console.log(this.chitAliveFilter, this.chitName.length, this.chitName.length, this.chitName.length);
    if (this.chitName.length <= 0 && this.chitAmt.length <= 0 && this.chitMem.length <= 0) {
      if (this.chitAliveFilter === 'ALL') {
        console.log(this.dummypagedata);
        this.pagedata = this.dummypagedata;
      } else {
        this.pagedata = this.dummypagedata.filter(name => {
          return (name['chitilive'] === this.chitAliveFilter);
        });
      }
    } else {
      if (this.chitName.length > 0) {
        this.onSearchChange('name', this.chitName);
      }
      if (this.chitAmt.length > 0) {
        this.onSearchChange('amt', this.chitName);
      }
      if (this.chitMem.length > 0) {
        this.onSearchChange('mem', this.chitName);
      }
    }
  }
  changeSelected(val: any) {
    this.selectedsearch = val;
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.getdataService.getPager(this.chitiCount, page);
    console.log(this.pager);
    // get current page of items
     this.getChitiDetails(this.pager.startIndex, this.pager.endIndex + 1);
    this.dummypagedata = this.pagedata;
  }
  goToChiti(citiname) {
    this.router.navigate(['/home/viewchtisdetails'],
      {
        queryParams: {
          chitName: citiname
        }
      });
  }
}
