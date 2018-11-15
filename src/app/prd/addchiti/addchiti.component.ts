import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {GetdataService} from '../../service/getdata.service';
@Component({
  selector: 'app-addchiti',
  templateUrl: './addchiti.component.html',
  styleUrls: ['./addchiti.component.css']
})
export class AddchitiComponent implements OnInit {
  chitiAddingForm: FormGroup;
  selectedMembersArray = [];
  existingMembersArray = [
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
  pager: any = {};
  exsistingmems: any = [];
  constructor(private fb: FormBuilder, private getdataService: GetdataService) { }

  ngOnInit() {
    this.createForm();
    this.setPage(1);
  }

  createForm() {
    this.chitiAddingForm = this.fb.group({
      chitiName: ['', Validators.required],
      amount: ['', Validators.required],
      members: ['', Validators.required],
      months: ['', Validators.required],
      startdate: ['', Validators.required],
      enddate: ['', Validators.required],
      memberName: [''],
      memberphonenumber: ['']
    });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.getdataService.getPager(this.existingMembersArray.length, page);
    console.log(this.pager);
    // get current page of items
     this.exsistingmems = this.existingMembersArray.slice(this.pager.startIndex, this.pager.endIndex + 1);
}
  addFieldValue(mem) {
    this.selectedMembersArray.push(mem);
  }

  deleteFieldValue(mem) {

    const expertDetailIndex = this.selectedMembersArray.findIndex(member => (member['name'] === mem['name']
    && member['phoneno'] === mem['phone']));

      this.selectedMembersArray.splice(expertDetailIndex, 1);

  }

  addMemberValue() {
    const name = this.chitiAddingForm.get('memberName').value;
    const mobno = this.chitiAddingForm.get('memberphonenumber').value;
    if (name.length > 0 && /\d{10}/.test(mobno) ) {
      this.selectedMembersArray.push({name: name, phoneno: mobno});
    }
  }
}
