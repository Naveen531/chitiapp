import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetdataService } from '../../service/getdata.service';

@Component({
  selector: 'app-viewexistingchiti',
  templateUrl: './viewexistingchiti.component.html',
  styleUrls: ['./viewexistingchiti.component.css']
})
export class ViewexistingchitiComponent implements OnInit {
  chtiDetalsArray = [
    {
      chitiname: 'Oct Chiti1', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'JAN Chiti2', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'FEB Chiti3', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'N'
    },
    {
      chitiname: 'MAR Chiti4', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'N'
    },
    {
      chitiname: 'MAR Chiti5', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti6', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti7', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti8', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti9', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti10', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'Oct Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'JAN Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'FEB Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'N'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'N'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'Y'
    },
    {
      chitiname: 'MAR Chiti', totalmembers: 15, chitiamonut: 150000, startdate: '15-JAN-2018',
      enddate: '15-DEC-2018', chitilive: 'N'
    },
  ];
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
    private getdataService: GetdataService
  ) { }

  ngOnInit() {
    this.setPage(1);
  }
  onSearchChange(filterby: any, val: any) {

    switch (filterby) {
      case 'name': {
        if (val !== undefined && val.length > 0) {
          console.log('name if.');
          this.pagedata = this.pagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              console.log('Alllll');
              return name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1;

            } else {
              console.log('no Alllll:' + name['chitilive']);
              return (name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1 && name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitAmt.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

            } else {
              return (name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitMem.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              // name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1);
              if (this.chitAliveFilter === 'ALL') {
                return name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            });
          }
        } else if (this.chitMem.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1

            if (this.chitAliveFilter === 'ALL') {
              return name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['chitiamonut'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

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
            // return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitName.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            // name => name['chitiname'].indexOf(val) > -1
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1 && name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitMem.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              if (this.chitAliveFilter === 'ALL') {
                return name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            }
            );
          }
        } else if (this.chitMem.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['chitiamonut'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

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
              return name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['totalmembers'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
        } else if (this.chitName.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiname'].toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          if (this.chitAmt.length > 0) {
            this.pagedata = this.pagedata.filter(name => {
              if (this.chitAliveFilter === 'ALL') {
                return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
              } else {
                return (name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                  name['chitilive'] === this.chitAliveFilter);
              }
            }
            );
          }
        } else if (this.chitAmt.length > 0) {
          this.pagedata = this.dummypagedata.filter(name => {
            if (this.chitAliveFilter === 'ALL') {
              return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;
            } else {
              return (name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1 &&
                name['chitilive'] === this.chitAliveFilter);
            }
          }
          );
          /* if (this.chitAmt.length  > 0 ) {
            this.pagedata = this.pagedata.filter(name => name['chitiamonut'].indexOf(val) > -1);
           } */
        } else {
          if (this.chitAliveFilter === 'ALL') {
            this.pagedata = this.dummypagedata;
          } else {
            this.pagedata = this.dummypagedata.filter(name => {
              // return name['chitiamonut'].toString().toLowerCase().indexOf(val.toLowerCase()) > -1;

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
    this.pager = this.getdataService.getPager(this.chtiDetalsArray.length, page);
    console.log(this.pager);
    // get current page of items
    this.pagedata = this.chtiDetalsArray.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.dummypagedata = this.pagedata;
  }
  goToChiti(citiname) {
    this.router.navigate(['/viewchtisdetails'],
      {
        queryParams: {
          chitName: citiname
        }
      });
  }
}
