import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddchitiComponent } from './addchiti/addchiti.component';
import { AddmembersComponent } from './addmembers/addmembers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ViewexistingchitiComponent } from './viewexistingchiti/viewexistingchiti.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { ChitidetailsComponent } from './chitidetails/chitidetails.component';
import { MemberchitiperformanceComponent } from './memberchitiperformance/memberchitiperformance.component';
import { ChitimonthwiseComponent } from './chitimonthwise/chitimonthwise.component';
const appRoutesofchild: Routes = [
  {path: 'addchiti', component: AddchitiComponent},
  {path: 'viewchtis', component: ViewexistingchitiComponent},
  {path: 'viewchtisdetails', component: ChitidetailsComponent},
  {path: 'memperformance', component: MemberchitiperformanceComponent},
];
@NgModule({
  imports: [
    CommonModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  declarations: [AddchitiComponent, AddmembersComponent, ViewexistingchitiComponent, ChitidetailsComponent,
    MemberchitiperformanceComponent,
    ChitimonthwiseComponent],
  exports: [BrowserAnimationsModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class PrdModule { }
