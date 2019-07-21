import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PojoService } from '../../service/pojo.service';
import { GetdataService } from '../../service/getdata.service';
import {ApiinfoService} from '../../service/http/apiinfo.service';

@Component({
  selector: 'app-addchiti',
  templateUrl: './addchiti.component.html',
  styleUrls: ['./addchiti.component.css']
})
export class AddchitiComponent implements OnInit {
  chitiAddingForm: FormGroup;
  selectedMembersArray = [];
  existingMembersArray = [];
  pager: any = {};
  exsistingmems: any = [];
  constructor(
    private apiinfoService: ApiinfoService,
    private fb: FormBuilder,
    private getdataService: GetdataService,
    private pojoService: PojoService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getExsistingMembers();
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
      commission: ['', Validators.required],
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
    /*
    mem['email'] = mem['email'] == null ? 'dummy@gmail.com' : mem['email'];
    console.log(mem['email']);
    console.log(this.selectedMembersArray);*/
  }

  deleteFieldValue(mem) {

    const expertDetailIndex = this.selectedMembersArray.findIndex(member => (member['name'] === mem['name']
      && member['number'] === mem['number']));

    this.selectedMembersArray.splice(expertDetailIndex, 1);

  }

  addMemberValue() {
    const name = this.chitiAddingForm.get('memberName').value;
    const mobno = this.chitiAddingForm.get('memberphonenumber').value;
    /*const email = this.chitiAddingForm.get('email').value == null ? 'dummy@gmail.com' : this.chitiAddingForm.get('email').value;*/
    const email = this.chitiAddingForm.get('email').value;
    console.log({ name: name, number: mobno, email: email });
    if (name.length > 0 && /\d{10}/.test(mobno)) {
      this.selectedMembersArray.push({ name: name, number: mobno, email: email });
    }
  }


  addChiti() {
    console.log(this.pojoService.getUserName());
    const a = {
      'chitiName': this.chitiAddingForm.get('chitiName').value,
      'amount': this.chitiAddingForm.get('amount').value,
      'members': this.chitiAddingForm.get('members').value,
      'months': this.chitiAddingForm.get('months').value,
      'startDate': this.chitiAddingForm.get('startdate').value,
      'ownedby': this.pojoService.getUserName(),
      'endDate': this.chitiAddingForm.get('enddate').value,
      'commission': this.chitiAddingForm.get('commission').value,
      'memberDetails': this.selectedMembersArray
    };
    console.log(a);
    this.apiinfoService.postApi('addChiti', a).subscribe(
      data => {
        console.log(data);
      }, error => {}, () => {}
    );
  }

  getExsistingMembers() {

    this.apiinfoService.getApi('getChitiMembers', {'user': this.pojoService.getUserName()})
    .subscribe(
      data => {
        console.log(data['data'][0]['name']);
        this.existingMembersArray = data['data'];
      }, error => {}, () => {
        this.setPage(1);
      }
    );
  }
}
