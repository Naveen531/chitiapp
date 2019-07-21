import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PrdModule } from './prd/prd.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderFooterComponent } from './home/header-footer/header-footer.component';
import { LoginCheckComponent } from './login/login-check/login-check.component';
import { AddchitiComponent } from './prd/addchiti/addchiti.component';
import { ChitidetailsComponent } from './prd/chitidetails/chitidetails.component';
import { MemberchitiperformanceComponent } from './prd/memberchitiperformance/memberchitiperformance.component';
import { ViewexistingchitiComponent } from './prd/viewexistingchiti/viewexistingchiti.component';
import { ChitimonthwiseComponent } from './prd/chitimonthwise/chitimonthwise.component';

const appRoutes: Routes = [

  {
    path: 'home', component: HeaderFooterComponent, children: [
      { path: 'addchiti', component: AddchitiComponent },
      { path: 'viewchtis', component: ViewexistingchitiComponent },
      { path: 'viewchtisdetails', component: ChitidetailsComponent },
      { path: 'memperformance', component: MemberchitiperformanceComponent },
      { path: 'chitimonthwise', component: ChitimonthwiseComponent },
      { path: 'homeScreen', component: HomeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderFooterComponent,
    LoginCheckComponent
  ],
  imports: [
    BrowserModule, PrdModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
