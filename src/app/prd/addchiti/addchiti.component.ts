import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {PojoService} from '../../service/pojo.service';
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
    {name: 'Naveen Kumar Reddy Redlavari123', phoneno: 99989642186},
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
  constructor(
     private fb: FormBuilder,
     private getdataService: GetdataService,
     private pojoService: PojoService
     ) { }

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
      memberName: ['', Validators.required],
      memberphonenumber: ['', Validators.required],
      email: ['']
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
    const email = this.chitiAddingForm.get('email').value;
    console.log({name: name, phoneno: mobno, email: email});
    if (name.length > 0 && /\d{10}/.test(mobno) ) {
      this.selectedMembersArray.push({name: name, phoneno: mobno, email: email});
    }
  }


  addChiti() {
    console.log(this.pojoService.getUserName());
    let a = {'chitiName' :  this.chitiAddingForm.get('chitiName').value,
    'amount' : this.chitiAddingForm.get('amount').value,
    'members' : this.chitiAddingForm.get('members').value,
    'months' : this.chitiAddingForm.get('months').value,
    'startDate' : this.chitiAddingForm.get('startdate').value,
    'ownedby' : this.pojoService.getUserName(),
    'endDate' : this.chitiAddingForm.get('enddate').value,
    'chitmembers' : this.selectedMembersArray
  };
console.log(a);
  }
}
