import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PojoService } from '../../service/pojo.service';
import { GetdataService } from '../../service/getdata.service';
import {ApiinfoService} from '../../service/http/apiinfo.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-chitimonthwise',
  templateUrl: './chitimonthwise.component.html',
  styleUrls: ['./chitimonthwise.component.css']
})
export class ChitimonthwiseComponent implements OnInit {
  chitiMonthForm: FormGroup;
  chitiname: any = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiinfoService: ApiinfoService,
    private fb: FormBuilder,
    private getdataService: GetdataService,
    private pojoService: PojoService
  ) { }

  ngOnInit() {
    this.createMonthwiseFormData();
    this.getChittiName();
  }
  goBack() {
    this.router.navigate(['/home/viewchtisdetails'],
    {
      queryParams: {
        chitName: this.chitiname
      }
    });  }
  createMonthwiseFormData() {
    this.chitiMonthForm = this.fb.group({
      soldAmount : ['', Validators.required],
      month: ['', Validators.required],
      comm_per: ['', Validators.required],
      comm_amt: ['', Validators.required],
      takenby: ['', Validators.required]
    });
  }

  getChittiName() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        console.log('chitname:' + params['chitName']);
        if (params['chitName'] && params['chitName'] !== undefined) {
          this.chitiname = params['chitName'];
        }
      }, error => {

      }, () => {
      }
    );
  }


  saveData() {
    const a = {
    chitiname: this.chitiname,
    soldamount: this.chitiMonthForm.get('soldAmount').value,
    month: this.chitiMonthForm.get('month').value,
    comm_per: this.chitiMonthForm.get('comm_per').value,
    comm_amt: this.chitiMonthForm.get('comm_amt').value,
    takenby: this.chitiMonthForm.get('takenby').value,
    ownedby: this.pojoService.getUserName()
    };
  }
}
