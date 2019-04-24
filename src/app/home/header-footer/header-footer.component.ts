import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    if (this.router.url === '/home') {
      this.router.navigate(['/home/homeScreen']);
    }
  }

  logout() {
    console.log('=========LogOut');
    localStorage.removeItem('chiti-token');
    //localStorage.clear();
    console.log('=========LogOut:' + localStorage.getItem('chitti-token'));
    this.router.navigate(['/login']);
  }


}
